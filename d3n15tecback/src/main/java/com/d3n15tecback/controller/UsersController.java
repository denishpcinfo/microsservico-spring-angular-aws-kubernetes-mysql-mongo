package com.d3n15tecback.controller;

import com.d3n15tecback.service.UserService;
import com.d3n15tecback.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    UserService userService;

    @GetMapping("/todos-usuarios")
    public ResponseEntity<Map<String, Object>> fetchAllUsers(
                    @RequestParam("page") int page,
                    @RequestParam("size") int size,
                    @RequestParam("sort") String sort) {

        List<User> allUsuarios = new ArrayList<User>();
        Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, sort);

        Page<User> allUsuariosPage = userService.findAllUsuarios(paging);
        allUsuarios = allUsuariosPage.getContent();

        Map<String, Object> response = new HashMap<>();
        response.put("allUsuarios", allUsuarios);
        response.put("currentPage", allUsuariosPage.getNumber());
        response.put("totalItems", allUsuariosPage.getTotalElements());
        response.put("totalPages", allUsuariosPage.getTotalPages());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
