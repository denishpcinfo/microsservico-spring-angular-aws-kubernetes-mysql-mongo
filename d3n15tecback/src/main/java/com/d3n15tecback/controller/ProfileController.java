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

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/profile")
public class ProfileController {

    private final UserRepository userRepository;
    private final UserService userService;

    @GetMapping("/{item}")
    public ResponseEntity<User> getUser(@PathVariable("item") String item) throws AcaoNaoPermitidaException {
        return new ResponseEntity<>(userService.getUser(item), HttpStatus.OK);
    }

    @PutMapping("/atualizar-cadastro")
    public ResponseEntity<User> atualizarUser(@RequestBody UserDTO userNovo) throws AcaoNaoPermitidaException {
        userService.atualizarUser(userNovo);
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deletar(@PathVariable("id") Long id) throws AcaoNaoPermitidaException {
        userService.deletar(id);
        return userService.getAllUsuariosBuscaNomeDepoisExcluir();
    }
}
