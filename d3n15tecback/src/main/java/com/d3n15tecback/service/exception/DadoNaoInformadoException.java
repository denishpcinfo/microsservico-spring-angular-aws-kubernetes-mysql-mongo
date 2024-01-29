package com.d3n15tecback.service.exception;

public class DadoNaoInformadoException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public DadoNaoInformadoException(String mensagem) {
        super(mensagem);
    }

    public DadoNaoInformadoException(String mensagem, Throwable causa) {
        super(mensagem, causa);
    }

}
