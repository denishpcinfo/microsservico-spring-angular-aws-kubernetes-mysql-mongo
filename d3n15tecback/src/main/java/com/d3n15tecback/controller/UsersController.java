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
                    @RequestParam(name = "page", required = false) int page,
                    @RequestParam("size") int size,
                    @RequestParam("sort") String sort,
                    @RequestParam(name = "busca", required = false) String busca,
                    @RequestParam(name = "global", required = false) String global){

        List<User> allUsuarios = new ArrayList<User>();
        Page<User> allUsuariosPage = null;

        if(global.equals("nome")){

            if(sort.equals("cpf asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "cpf");
                allUsuariosPage = userService.getAllUsuariosBuscaNome(paging, busca);

                Map<String, Object> response = new HashMap<>();
                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }if(sort.equals("cpf desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "cpf");
                allUsuariosPage = userService.getAllUsuariosBuscaNome(paging, busca);

                Map<String, Object> response = new HashMap<>();
                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }if(sort.equals("email asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "email");
                allUsuariosPage = userService.getAllUsuariosBuscaNome(paging, busca);

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
            if(sort.equals("email desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "email");
                allUsuariosPage = userService.getAllUsuariosBuscaNome(paging, busca);

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
            if(sort.equals("nome asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "nome");
                allUsuariosPage = userService.getAllUsuariosBuscaNome(paging, busca);

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
            if(sort.equals("nome desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "nome");
                allUsuariosPage = userService.getAllUsuariosBuscaNome(paging, busca);

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
            if(sort.equals("nome") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, sort);
                allUsuariosPage = userService.getAllUsuariosBuscaNome(paging, busca);

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
        if(global.equals("cpf")){

            if(sort.equals("cpf asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "cpf");
                allUsuariosPage = userService.getAllUsuariosBuscaCPF(paging, busca);

                Map<String, Object> response = new HashMap<>();
                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }if(sort.equals("cpf desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "cpf");
                allUsuariosPage = userService.getAllUsuariosBuscaCPF(paging, busca);

                Map<String, Object> response = new HashMap<>();
                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }if(sort.equals("email asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "email");
                allUsuariosPage = userService.getAllUsuariosBuscaCPF(paging, busca);

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
            if(sort.equals("email desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "email");
                allUsuariosPage = userService.getAllUsuariosBuscaCPF(paging, busca);

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
            if(sort.equals("nome asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "nome");
                allUsuariosPage = userService.getAllUsuariosBuscaCPF(paging, busca);

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
            if(sort.equals("nome desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "nome");
                allUsuariosPage = userService.getAllUsuariosBuscaCPF(paging, busca);

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
            if(sort.equals("nome") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, sort);
                allUsuariosPage = userService.getAllUsuariosBuscaCPF(paging, busca);

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
        if(global.equals("email")){

            if(sort.equals("cpf asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "cpf");
                allUsuariosPage = userService.getAllUsuariosBuscaEmail(paging, busca);

                Map<String, Object> response = new HashMap<>();
                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }if(sort.equals("cpf desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "cpf");
                allUsuariosPage = userService.getAllUsuariosBuscaEmail(paging, busca);

                Map<String, Object> response = new HashMap<>();
                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return new ResponseEntity<>(response, HttpStatus.OK);
            }if(sort.equals("email asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "email");
                allUsuariosPage = userService.getAllUsuariosBuscaEmail(paging, busca);

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
            if(sort.equals("email desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "email");
                allUsuariosPage = userService.getAllUsuariosBuscaEmail(paging, busca);

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
            if(sort.equals("nome asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "nome");
                allUsuariosPage = userService.getAllUsuariosBuscaEmail(paging, busca);

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
            if(sort.equals("nome desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "nome");
                allUsuariosPage = userService.getAllUsuariosBuscaEmail(paging, busca);

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
            if(sort.equals("nome") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, sort);
                allUsuariosPage = userService.getAllUsuariosBuscaEmail(paging, busca);

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

        return null;
    }

}
