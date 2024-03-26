package com.d3n15tecback.service;

import com.d3n15tecback.dto.UserDTO;
import com.d3n15tecback.helper.UsuarioHelper;
import com.d3n15tecback.repository.UserRepository;
import com.d3n15tecback.service.exception.AcaoNaoPermitidaException;
import com.d3n15tecback.service.exception.DadoNaoInformadoException;
import com.d3n15tecback.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserDTO atualizarUser(UserDTO userNovo) throws AcaoNaoPermitidaException {
        User usuario = new User();
        Optional<User> userBusca = userRepository.findById(userNovo.getId());
        if (userBusca.isPresent()) {
            userNovo.setPassword(passwordEncoder.encode(userNovo.getPassword()));
            userNovo.setCpf(userNovo.getCpf().trim().replace(".", "").replace("-", ""));
            userNovo.setTelefoneCelular(userNovo.getTelefoneCelular().trim().replace("+", "").replace("-", "").replace("(", "").replace(")", "").replace(" ", ""));

            if(!UsuarioHelper.validaTelefone(userNovo.getTelefoneCelular())) {
                throw new DadoNaoInformadoException("Telefone inválido!");
            }

            BeanUtils.copyProperties(userNovo, usuario);
            userRepository.save(usuario);
            return UserDTO.builder()
                    .build();
        }else{
            throw new AcaoNaoPermitidaException("Usuário não encontrado!!");
        }

    }


    public Page<User> findAllUsuarios(Pageable pageable) {
        return userRepository.getAllUsuarios(pageable);
    }


}
