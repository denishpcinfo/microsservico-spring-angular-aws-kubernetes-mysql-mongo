package com.d3n15tecback.service.exception;

public class AcaoNaoPermitidaException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public AcaoNaoPermitidaException(String mensagem) {
        super(mensagem);
    }

    public AcaoNaoPermitidaException(String mensagem, Throwable causa) {
        super(mensagem, causa);
    }
}
