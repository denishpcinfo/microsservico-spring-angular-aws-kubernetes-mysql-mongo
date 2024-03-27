package com.d3n15tecback.controller;

import com.d3n15tecback.dto.UserDTO;
import com.d3n15tecback.dto.UserResponseDTO;
import com.d3n15tecback.service.UserService;
import com.d3n15tecback.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    UserService userService;

    @GetMapping("/todos-usuarios")
    public ResponseEntity<Map<String, Object>> fetchAllUsers(
                    @RequestParam(defaultValue = "0") int page,
                    @RequestParam(defaultValue = "10") int size) {

        List<User> allUsuarios = new ArrayList<User>();
        Pageable paging = PageRequest.of(page, size);

        Page<User> allUsuariosPage = userService.findAllUsuarios(paging);

        allUsuarios = allUsuariosPage.getContent();
        List<UserResponseDTO> userResponseDTOO = new ArrayList<>();

        for(User user : allUsuarios){
            userResponseDTOO = Collections.singletonList(UserResponseDTO.convert(user));
        }

        Map<String, Object> response = new HashMap<>();
        response.put("allUsuarios", userResponseDTOO);
        response.put("currentPage", allUsuariosPage.getNumber());
        response.put("totalItems", allUsuariosPage.getTotalElements());
        response.put("totalPages", allUsuariosPage.getTotalPages());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
