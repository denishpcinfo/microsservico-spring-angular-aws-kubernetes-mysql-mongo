package com.d3n15tecback.service.exception;

public class AcaoNaoPermitidaException extends Throwable {

    private static final long serialVersionUID = 1L;

    public AcaoNaoPermitidaException(String mensagem) {
        super(mensagem);
    }
}
