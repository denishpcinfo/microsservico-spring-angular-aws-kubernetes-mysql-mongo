package com.d3n15tec.order.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Integer id;
    private String nome;
    private String email;
    private String address;
    private String city;
    private String cpf;

}
