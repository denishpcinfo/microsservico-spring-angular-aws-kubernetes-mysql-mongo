package com.d3n15tec.order.controller;

import com.d3n15tec.order.dto.OrderDTOFromFE;
import com.d3n15tec.order.dto.UserDTO;
import com.d3n15tec.order.entity.Order;
import com.d3n15tec.order.service.OrderService;
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
@RequestMapping("/api/pedido")
@CrossOrigin
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/salvar-pedido")
    public ResponseEntity<Order> saveOrder(@RequestBody OrderDTOFromFE orderDetails){
        Order orderSavedInDB = orderService.saveOrderInDb(orderDetails);
        return new ResponseEntity<>(orderSavedInDB, HttpStatus.CREATED);
    }

    @GetMapping("/todos")
    public ResponseEntity<Map<String, Object>> fetchAllPedidos(
            @RequestParam(name = "page", required = false) int page,
            @RequestParam("size") int size,
            @RequestParam("sort") String sort,
            @RequestParam(name = "busca", required = false) String busca,
            @RequestParam(name = "global", required = false) String global){

        if(global.equals("data")){
            return new ResponseEntity<>(orderService.buscarPorData(page, size, sort, busca), HttpStatus.OK);

        } else if(global.equals("numeroPedido")){
            return new ResponseEntity<>(orderService.buscarPorNumeroPedido(page, size, sort, busca), HttpStatus.OK);

        } else if(global.equals("nomeRestaurante")){
            return new ResponseEntity<>(orderService.buscarPorNomeRestaurante(page, size, sort, busca), HttpStatus.OK);

        } else if(global.equals("nomeCliente")){
            return new ResponseEntity<>(orderService.buscarPorNomeCliente(page, size, sort, busca), HttpStatus.OK);

        }

        return new ResponseEntity<>(orderService.buscarPorData(page, size, sort, busca), HttpStatus.OK);
    }

    @GetMapping("/todos-meus-pedidos")
    public ResponseEntity<Map<String, Object>> fetchAllPedidosUsuario(
            @RequestParam("email") String email,
            @RequestParam(name = "page", required = false) int page,
            @RequestParam("size") int size,
            @RequestParam("sort") String sort,
            @RequestParam(name = "busca", required = false) String busca,
            @RequestParam(name = "global", required = false) String global){

        if(global.equals("data")){
            return new ResponseEntity<>(orderService.buscarPorDataUser(email, page, size, sort, busca), HttpStatus.OK);

        } else if(global.equals("numeroPedido")){
            return new ResponseEntity<>(orderService.buscarPorNumeroPedidoUser(email, page, size, sort, busca), HttpStatus.OK);

        } else if(global.equals("nomeRestaurante")){
            return new ResponseEntity<>(orderService.buscarPorNomeRestauranteUser(email, page, size, sort, busca), HttpStatus.OK);
        }

        return new ResponseEntity<>(orderService.buscarPorDataUser(email, page, size, sort, busca), HttpStatus.OK);
    }

}
