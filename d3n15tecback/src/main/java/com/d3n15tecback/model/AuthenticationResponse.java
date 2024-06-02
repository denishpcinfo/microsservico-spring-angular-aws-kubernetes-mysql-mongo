package com.d3n15tecback.model;

import com.d3n15tecback.user.User;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class AuthenticationResponse {

  private String accessToken;
  private String refreshToken;
  private User user;
}
