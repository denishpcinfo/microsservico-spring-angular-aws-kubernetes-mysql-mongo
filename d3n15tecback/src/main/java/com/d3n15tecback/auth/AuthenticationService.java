package com.d3n15tecback.auth;

import com.d3n15tecback.config.JwtService;
import com.d3n15tecback.helper.UsuarioHelper;
import com.d3n15tecback.model.AuthenticationRequest;
import com.d3n15tecback.model.AuthenticationResponse;
import com.d3n15tecback.model.RegisterRequest;
import com.d3n15tecback.repository.UserRepository;
import com.d3n15tecback.service.exception.AcaoNaoPermitidaException;
import com.d3n15tecback.service.exception.DadoNaoInformadoException;
import com.d3n15tecback.user.Role;
import com.d3n15tecback.user.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) throws AcaoNaoPermitidaException {

        var user = User.builder()
                .nome(request.getNome())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .dataNascimento(request.getDataNascimento())
                .cpf(request.getCpf())
                .telefoneCelular(request.getTelefoneCelular())
                .role(Role.USER)
                .build();

        if(repository.findByEmail(user.getEmail()).isPresent()){
            throw new DadoNaoInformadoException("Email já cadastrado!");
        }

        user.setCpf(user.getCpf().trim().replace(".", "").replace("-", ""));

        if(repository.findByCpf(user.getCpf()).isPresent()){
            throw new DadoNaoInformadoException("CPF já cadastrado!");
        }

        user.setTelefoneCelular(user.getTelefoneCelular().trim().replace("+", "").replace("-", "").replace("(", "").replace(")", "").replace(" ", ""));

        if(!UsuarioHelper.validaCPF(user.getCpf())){
            throw new DadoNaoInformadoException("CPF inválido!");
        }else if(!UsuarioHelper.validaTelefone(user.getTelefoneCelular())){
            throw new DadoNaoInformadoException("Telefone inválido!");
        }else{
            repository.save(user);
            var jwtToken = jwtService.generateToken(user);
            var refreshToken = jwtService.generateRefreshToken(user);
            return AuthenticationResponse.builder()
                    .accessToken(jwtToken)
                    .refreshToken(refreshToken)
                    .build();
        }
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        return AuthenticationResponse.builder()
                .accessToken(jwtToken)
                .refreshToken(refreshToken)
                .user(user)
                .build();
    }

    public void refreshToken(HttpServletRequest requisicao, HttpServletResponse response) throws IOException, AcaoNaoPermitidaException {

        final String authHeaderRefresh = requisicao.getHeader("refreshtoken");
        final String refreshToken;
        final String userEmail;

        if (authHeaderRefresh == null || !authHeaderRefresh.startsWith("Bearer ")) {
            return;
        }

        refreshToken = authHeaderRefresh.substring(7);

        if(jwtService.extractUsername(refreshToken) != null){
            userEmail = jwtService.extractUsername(refreshToken);
        }else{
            throw new AcaoNaoPermitidaException("Login expirado!");
        }
            var user = this.repository.findByEmail(userEmail)
                    .orElseThrow();
            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                var authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();
                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }else{
                throw new AcaoNaoPermitidaException("Login expirado!");
            }

    }

}
