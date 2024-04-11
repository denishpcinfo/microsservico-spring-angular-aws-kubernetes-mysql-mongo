package com.d3n15tecback.dto;

import com.d3n15tecback.user.Role;
import lombok.*;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Integer id;
    private String nome;
    private String email;
    private String password;
    private String cpf;
    private LocalDate dataNascimento;
    private String telefoneCelular;
    private Role role;
}
