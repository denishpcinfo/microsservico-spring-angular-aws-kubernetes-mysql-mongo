package com.d3n15tecback.service;

import com.d3n15tecback.auth.AuthenticationResponse;
import com.d3n15tecback.dto.UserDTO;
import com.d3n15tecback.repository.UserRepository;
import com.d3n15tecback.service.exception.AcaoNaoPermitidaException;
import com.d3n15tecback.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public AuthenticationResponse atualizarUser(UserDTO userNovo) throws AcaoNaoPermitidaException {

        Optional<User> userAntigo = userRepository.findById(userNovo.getId());

        return null;

    }
}
