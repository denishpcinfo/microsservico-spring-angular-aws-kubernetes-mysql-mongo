package com.d3n15tecback.dto;

import com.d3n15tecback.user.Role;
import com.d3n15tecback.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class UserResponseDTO {

    private Integer id;
    private String firstname;
    private String lastname;
    private String email;
    private String cpf;
    private LocalDate dataNascimento;
    private String telefoneCelular;
    private Role role;

    public static UserResponseDTO convert (User user){

        UserResponseDTO userResponseDTO = new UserResponseDTO();

        userResponseDTO.id = user.getId();
        userResponseDTO.firstname = user.getFirstname();
        userResponseDTO.lastname = user.getLastname();
        userResponseDTO.email = user.getEmail();
        userResponseDTO.cpf = user.getCpf();
        userResponseDTO.dataNascimento = user.getDataNascimento();
        userResponseDTO.telefoneCelular = user.getTelefoneCelular();
        userResponseDTO.role = user.getRole();

        return userResponseDTO;
    }
}
