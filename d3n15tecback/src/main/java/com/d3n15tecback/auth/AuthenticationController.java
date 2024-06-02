package com.d3n15tecback.auth;

import com.d3n15tecback.model.AuthenticationRequest;
import com.d3n15tecback.model.AuthenticationResponse;
import com.d3n15tecback.model.RegisterRequest;
import com.d3n15tecback.service.exception.AcaoNaoPermitidaException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/autenticacao")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/registrar")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) throws AcaoNaoPermitidaException {
        service.register(request);
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {

        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/refresh-token")
    public void refreshToken(
            HttpServletRequest requisicao,
            HttpServletResponse response
    ) throws IOException, AcaoNaoPermitidaException {
        service.refreshToken(requisicao, response);
    }
}
