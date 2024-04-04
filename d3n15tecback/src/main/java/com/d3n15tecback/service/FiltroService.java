package com.d3n15tecback.service;

import com.d3n15tecback.model.LabelValue;
import com.d3n15tecback.repository.UserRepository;
import com.d3n15tecback.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FiltroService {

    @Autowired
    private UserRepository userRepository;

    public List<LabelValue> filtroUsuarios() {
        List<LabelValue> filtro = new ArrayList<>();
            List<User> usuarios = userRepository.findAllOrderByfirstname();
            for (User usuario : usuarios) {
                filtro.add(new LabelValue(usuario.getId().toString(), usuario.getFirstname()));
            }
        return filtro;
    }
}
