package com.d3n15tecback.service.exception.handler;

import com.d3n15tecback.service.exception.AcaoNaoPermitidaException;
import com.d3n15tecback.service.exception.DadoNaoInformadoException;
import com.d3n15tecback.service.exception.DetalhesErro;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class HomologuiHandler {

    @ExceptionHandler(AcaoNaoPermitidaException.class)
    public ResponseEntity<DetalhesErro> handlerAcaoNaoPermitidaException(AcaoNaoPermitidaException e, HttpServletRequest request){

        DetalhesErro erro = new DetalhesErro();
        erro.setTitulo(e.getMessage());
        erro.setMensagemDesenvolvedor("");
        erro.setTimestamp(System.currentTimeMillis());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erro);
    }


    @ExceptionHandler(DadoNaoInformadoException.class)
    public ResponseEntity<DetalhesErro> handlerDadoNaoInformadoException(DadoNaoInformadoException e, HttpServletRequest request){

        DetalhesErro erro = new DetalhesErro();
        erro.setStatus(400);
        erro.setTitulo(e.getMessage());
        erro.setMensagemDesenvolvedor("");
        erro.setTimestamp(System.currentTimeMillis());

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(erro);
    }
}


