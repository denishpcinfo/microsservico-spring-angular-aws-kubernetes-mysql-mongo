package com.d3n15tec.order.service;

import com.d3n15tec.order.dto.OrderDTOFromFE;
import com.d3n15tec.order.dto.UserDTO;
import com.d3n15tec.order.entity.Order;
import com.d3n15tec.order.enums.StatusPedido;
import com.d3n15tec.order.repo.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OrderService {

    @Autowired
    OrderRepo orderRepo;

    @Autowired
    SequenceGenerator sequenceGenerator;

    @Autowired
    RestTemplate restTemplate;

    public Order saveOrderInDb(OrderDTOFromFE orderDetails) {
        Integer newOrderID = sequenceGenerator.generateNextOrderId();
        LocalDateTime dataAtual = LocalDateTime.now(ZoneId.of("America/Sao_Paulo"));
        Order orderToBeSaved = new Order(newOrderID, orderDetails.getFoodItemsList(), orderDetails.getRestaurant(),
                orderDetails.getUser(), dataAtual, StatusPedido.PEDIDO_REALIZADO.getDescricao(), orderDetails.getValorTotal());
        orderToBeSaved = orderRepo.save(orderToBeSaved);
        return orderToBeSaved;
    }

    public UserDTO fetchUserDetailsFromUserId(String email) {
       return restTemplate.getForObject("http://USER-SERVICE/profile/" + email, UserDTO.class);
    }

    public Map<String, Object> buscarPorData(int page, int size, String sort, String busca){

        Map<String, Object> response = new HashMap<>();
        List<Order> allPedidos = new ArrayList<Order>();
        Page<Order> allPedidosPage = null;

        if(sort.equals("data asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "dataPedido");
            allPedidosPage = getAllUsuariosBuscaDataAsc(paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("data desc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "dataPedido");
            allPedidosPage = getAllUsuariosBuscaDataAsc(paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        if(sort.equals("pedido asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "orderId");
            allPedidosPage = getAllUsuariosBuscaDataAsc(paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("pedido desc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "orderId");
            allPedidosPage = getAllUsuariosBuscaDataAsc(paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        if(sort.equals("nomeRestaurante asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "restaurant.name");
            allPedidosPage = findByRestaurantName(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("nomeRestaurante desc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "restaurant.name");
            allPedidosPage = getAllUsuariosBuscaDataAsc(paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        if(sort.equals("nomeCliente asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "user.nome");
            allPedidosPage = getAllUsuariosBuscaDataAsc(paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("nomeCliente desc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "user.nome");
            allPedidosPage = getAllUsuariosBuscaDataAsc(paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        return buscarPorData(page, size, sort, busca);
    }


    public Map<String, Object> buscarPorNumeroPedido(int page, int size, String sort, String busca){

        Map<String, Object> response = new HashMap<>();
        List<Order> allPedidos = new ArrayList<Order>();
        Page<Order> allPedidosPage = null;

        if(sort.equals("data asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "orderId");
            allPedidosPage = findByOrderId(paging, busca);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("data desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "orderId");
            allPedidosPage = findByOrderId(paging, busca);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }
        if(sort.equals("pedido asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "orderId");
            allPedidosPage = findByOrderId(paging, busca);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("pedido desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "orderId");
            allPedidosPage = findByOrderId(paging, busca);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }

        if(sort.equals("nomeRestaurante asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "restaurant.name");
            allPedidosPage = findByOrderId(paging, busca);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("nomeRestaurante desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "restaurant.name");
            allPedidosPage = findByOrderId(paging, busca);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }
        if(sort.equals("nomeCliente asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "user.nome");
            allPedidosPage = findByOrderId(paging, busca);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("nomeCliente desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "user.nome");
            allPedidosPage = findByOrderId(paging, busca);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        return buscarPorData(page, size, sort, busca);
    }


    public Map<String, Object> buscarPorNomeRestaurante(int page, int size, String sort, String busca){

        Map<String, Object> response = new HashMap<>();
        List<Order> allPedidos = new ArrayList<Order>();
        Page<Order> allPedidosPage = null;

        if(sort.equals("data asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "dataPedido");
            allPedidosPage = findByRestaurantName(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("data desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "dataPedido");
            allPedidosPage = findByRestaurantName(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        if(sort.equals("pedido asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "orderId");
            allPedidosPage = findByRestaurantName(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("pedido desc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "orderId");
            allPedidosPage = findByRestaurantName(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        if(sort.equals("nomeRestaurante asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "restaurant.name");
            allPedidosPage = findByRestaurantName(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("nomeRestaurante desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "restaurant.name");
            allPedidosPage = findByRestaurantName(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        if(sort.equals("nomeCliente asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "user.nome");
            allPedidosPage = findByRestaurantName(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("nomeCliente desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "user.nome");
            allPedidosPage = findByRestaurantName(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }
        return buscarPorData(page, size, sort, busca);
    }

    public Map<String, Object> buscarPorNomeCliente(int page, int size, String sort, String busca){

        Map<String, Object> response = new HashMap<>();
        List<Order> allPedidos = new ArrayList<Order>();
        Page<Order> allPedidosPage = null;

        if(sort.equals("data asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "dataPedido");
            allPedidosPage = findByUserDTONome(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("data desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "dataPedido");
            allPedidosPage = findByUserDTONome(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        if(sort.equals("pedido asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "orderId");
            allPedidosPage = findByUserDTONome(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("pedido desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "orderId");
            allPedidosPage = findByUserDTONome(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        if(sort.equals("nomeRestaurante asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "restaurant.name");
            allPedidosPage = findByUserDTONome(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("nomeRestaurante desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "restaurant.name");
            allPedidosPage = findByUserDTONome(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        if(sort.equals("nomeCliente asc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "user.nome");
            allPedidosPage = findByUserDTONome(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;

        }else if(sort.equals("nomeCliente desc") && !busca.equals("")){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "user.nome");
            allPedidosPage = findByUserDTONome(busca, paging);

            if(allPedidosPage.getContent() != null){
                allPedidos = allPedidosPage.getContent();
            }
            response.put("allPedidos", allPedidos);
            response.put("currentPage", allPedidosPage.getNumber());
            response.put("totalItems", allPedidosPage.getTotalElements());
            response.put("totalPages", allPedidosPage.getTotalPages());
            return response;
        }

        return buscarPorData(page, size, sort, busca);
    }


    public Page<Order> getAllUsuariosBuscaDataAsc(Pageable pageable) {
        return orderRepo.findAll(pageable);
    }

    public Page<Order> findByRestaurantName(String busca, Pageable paging) {
        return orderRepo.findByRestaurantName(busca, paging);
    }

    public Page<Order> findByOrderId(Pageable paging, String busca) {
        return orderRepo.findByOrderId(paging, Integer.valueOf(busca));
    }

    public Page<Order> findByUserDTONome(String busca, Pageable paging) {
        return orderRepo.findByUserDTONome(busca, paging);
    }
}
