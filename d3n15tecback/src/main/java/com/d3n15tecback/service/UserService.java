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

    public User getUser(String item) throws AcaoNaoPermitidaException {
        Optional<User> user = userRepository.findByEmail(item);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new AcaoNaoPermitidaException("Usuário não encontrado!");
        }
    }

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


    public Map<String, Object> buscarPorNome(int page, int size, String sort, String busca){

        List<User> allUsuarios = new ArrayList<User>();
        Page<User> allUsuariosPage = null;
        Map<String, Object> response = new HashMap<>();

            if(sort.equals("cpf asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "cpf");
                allUsuariosPage = getAllUsuariosBuscaNome(paging, busca);


                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return response;

            }if(sort.equals("cpf desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "cpf");
                allUsuariosPage = getAllUsuariosBuscaNome(paging, busca);

                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return response;

            }if(sort.equals("email asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "email");
                allUsuariosPage = getAllUsuariosBuscaNome(paging, busca);

                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return response;

            }
            if(sort.equals("email desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "email");
                allUsuariosPage = getAllUsuariosBuscaNome(paging, busca);

                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return response;

            }
            if(sort.equals("nome asc") && busca != null){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "nome");
                allUsuariosPage = getAllUsuariosBuscaNome(paging, busca);

                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return response;

            }
            if(sort.equals("nome desc") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "nome");
                allUsuariosPage = getAllUsuariosBuscaNome(paging, busca);

                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return response;

            }
            if(sort.equals("nome") && (!busca.equals(null))){
                Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, sort);
                allUsuariosPage = getAllUsuariosBuscaNome(paging, busca);

                if(allUsuariosPage.getContent() != null){
                    allUsuarios = allUsuariosPage.getContent();
                }
                response.put("allUsuarios", allUsuarios);
                response.put("currentPage", allUsuariosPage.getNumber());
                response.put("totalItems", allUsuariosPage.getTotalElements());
                response.put("totalPages", allUsuariosPage.getTotalPages());
                return response;
            }

        return buscarPorNome(page, size, sort, busca);
    }


    public Map<String, Object> buscarPorCpf(int page, int size, String sort, String busca){

        List<User> allUsuarios = new ArrayList<User>();
        Page<User> allUsuariosPage = null;
        Map<String, Object> response = new HashMap<>();

        if(sort.equals("cpf asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "cpf");
            allUsuariosPage = getAllUsuariosBuscaCPF(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }if(sort.equals("cpf desc") && (!busca.equals(null))){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "cpf");
            allUsuariosPage = getAllUsuariosBuscaCPF(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }if(sort.equals("email asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "email");
            allUsuariosPage = getAllUsuariosBuscaCPF(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }
        if(sort.equals("email desc") && (!busca.equals(null))){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "email");
            allUsuariosPage = getAllUsuariosBuscaCPF(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }
        if(sort.equals("nome asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "nome");
            allUsuariosPage = getAllUsuariosBuscaCPF(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }
        if(sort.equals("nome desc") && (!busca.equals(null))){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "nome");
            allUsuariosPage = getAllUsuariosBuscaCPF(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }
        if(sort.equals("nome") && (!busca.equals(null))){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, sort);
            allUsuariosPage = getAllUsuariosBuscaCPF(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;
        }

        return buscarPorNome(page, size, sort, busca);
    }


    public Map<String, Object> buscarPorEmail(int page, int size, String sort, String busca){

        List<User> allUsuarios = new ArrayList<User>();
        Page<User> allUsuariosPage = null;
        Map<String, Object> response = new HashMap<>();

        if(sort.equals("cpf asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "cpf");
            allUsuariosPage = getAllUsuariosBuscaEmail(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }if(sort.equals("cpf desc") && (!busca.equals(null))){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "cpf");
            allUsuariosPage = getAllUsuariosBuscaEmail(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }if(sort.equals("email asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "email");
            allUsuariosPage = getAllUsuariosBuscaEmail(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }
        if(sort.equals("email desc") && (!busca.equals(null))){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "email");
            allUsuariosPage = getAllUsuariosBuscaEmail(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }
        if(sort.equals("nome asc") && busca != null){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, "nome");
            allUsuariosPage = getAllUsuariosBuscaEmail(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }
        if(sort.equals("nome desc") && (!busca.equals(null))){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.DESC, "nome");
            allUsuariosPage = getAllUsuariosBuscaEmail(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }
        if(sort.equals("nome") && (!busca.equals(null))){
            Pageable paging = PageRequest.of(page, size, Sort.Direction.ASC, sort);
            allUsuariosPage = getAllUsuariosBuscaEmail(paging, busca);

            if(allUsuariosPage.getContent() != null){
                allUsuarios = allUsuariosPage.getContent();
            }
            response.put("allUsuarios", allUsuarios);
            response.put("currentPage", allUsuariosPage.getNumber());
            response.put("totalItems", allUsuariosPage.getTotalElements());
            response.put("totalPages", allUsuariosPage.getTotalPages());
            return response;

        }

        return buscarPorNome(page, size, sort, busca);
    }
}
