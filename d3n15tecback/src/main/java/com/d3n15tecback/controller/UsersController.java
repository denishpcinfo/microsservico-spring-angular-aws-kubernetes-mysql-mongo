package com.d3n15tecback.controller;

import com.d3n15tecback.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    UserService userService;

    @GetMapping("/todos-usuarios")
    public ResponseEntity<Map<String, Object>> fetchAllUsers(
                    @RequestParam(name = "page", required = false) int page,
                    @RequestParam("size") int size,
                    @RequestParam("sort") String sort,
                    @RequestParam(name = "busca", required = false) String busca,
                    @RequestParam(name = "global", required = false) String global){

        if(global.equals("nome")){
            return new ResponseEntity<>(userService.buscarPorNome(page, size, sort, busca), HttpStatus.OK);

        } else if(global.equals("cpf")){
            return new ResponseEntity<>(userService.buscarPorCpf(page, size, sort, busca), HttpStatus.OK);

        } else if(global.equals("email")){

            return new ResponseEntity<>(userService.buscarPorEmail(page, size, sort, busca), HttpStatus.OK);
        }

        return null;
    }

}
