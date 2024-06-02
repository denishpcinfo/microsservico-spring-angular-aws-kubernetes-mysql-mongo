package com.d3n15tecback.model;

import com.d3n15tecback.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  private String nome;
  private String email;
  private String password;
  private String cpf;
  private LocalDate dataNascimento;
  private String telefoneCelular;
  private Role role;
}
