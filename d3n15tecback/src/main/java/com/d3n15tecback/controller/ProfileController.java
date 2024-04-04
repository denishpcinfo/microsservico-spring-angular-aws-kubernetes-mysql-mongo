package com.d3n15tecback.controller;

import com.d3n15tecback.dto.UserDTO;
import com.d3n15tecback.repository.UserRepository;
import com.d3n15tecback.service.UserService;
import com.d3n15tecback.service.exception.AcaoNaoPermitidaException;
import com.d3n15tecback.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile")
public class ProfileController {

    private final UserRepository userRepository;
    private final UserService userService;

    @GetMapping("/{item}")
    public ResponseEntity<User> getByUser(@PathVariable("item") String item) throws AcaoNaoPermitidaException {
        Optional<User> user = userRepository.findByEmail(item);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }
        else {
            throw new AcaoNaoPermitidaException("Usuário não encontrado!!");
        }
    }

    @PutMapping("/atualizar-cadastro")
    public ResponseEntity<User> atualizarUser(@RequestBody UserDTO userNovo) throws AcaoNaoPermitidaException {
        userService.atualizarUser(userNovo);
        return null;
    }

}
