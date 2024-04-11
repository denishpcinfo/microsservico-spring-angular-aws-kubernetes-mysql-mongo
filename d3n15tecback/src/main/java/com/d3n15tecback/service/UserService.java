package com.d3n15tecback.service;

import com.d3n15tecback.dto.UserDTO;
import com.d3n15tecback.helper.UsuarioHelper;
import com.d3n15tecback.repository.UserRepository;
import com.d3n15tecback.service.exception.AcaoNaoPermitidaException;
import com.d3n15tecback.service.exception.DadoNaoInformadoException;
import com.d3n15tecback.user.User;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserDTO atualizarUser(UserDTO userNovo) throws AcaoNaoPermitidaException {
        User usuario = new User();
        User usuario1 = new User();

        Optional<User> userBusca = userRepository.findById(userNovo.getId());
        if (userBusca.isPresent()) {
            usuario1 = userBusca.get();
            if(userNovo.getPassword() != null){
                userNovo.setPassword(passwordEncoder.encode(userNovo.getPassword()));
            }else{
                userNovo.setPassword(usuario1.getPassword());
            }
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

    public Page<User> getAllUsuariosBuscaNome(Pageable pageable, String busca) {
        return userRepository.getAllUsuariosBuscaNome(pageable, busca);
    }

    public Page<User> getAllUsuariosBuscaCPF(Pageable pageable, String busca) {
        return userRepository.getAllUsuariosBuscaCPF(pageable, busca);
    }

    public Page<User> getAllUsuariosBuscaEmail(Pageable pageable, String busca) {
        return userRepository.getAllUsuariosBuscaEmail(pageable, busca);
    }

    @Transactional
    public void deletar(Long id) throws AcaoNaoPermitidaException {
        Optional<User> userBusca = userRepository.findById(id);
        if (userBusca.isPresent()) {
            userRepository.deleteById(id);
        }else{
            throw new AcaoNaoPermitidaException("Usuário não encontrado!!");
        }
    }

    public ResponseEntity<Map<String, Object>> getAllUsuariosBuscaNomeDepoisExcluir() {
        List<User> allUsuarios = new ArrayList<>();
        Page<User> allUsuariosPage = null;
        Pageable paging = PageRequest.of(0, 10, Sort.Direction.ASC, "nome");
        allUsuariosPage = getAllUsuariosBuscaNome(paging, "");
        Map<String, Object> response = new HashMap<>();
        if(allUsuariosPage.getContent() != null){
            allUsuarios = allUsuariosPage.getContent();
        }
        response.put("allUsuarios", allUsuarios);
        response.put("currentPage", allUsuariosPage.getNumber());
        response.put("totalItems", allUsuariosPage.getTotalElements());
        response.put("totalPages", allUsuariosPage.getTotalPages());

        return new ResponseEntity<>(response, HttpStatus.OK);

    }
}
