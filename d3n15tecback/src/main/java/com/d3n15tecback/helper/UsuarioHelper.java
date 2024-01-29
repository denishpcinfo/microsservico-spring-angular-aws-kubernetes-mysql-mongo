package com.d3n15tecback.helper;

import com.d3n15tecback.service.exception.AcaoNaoPermitidaException;
import com.d3n15tecback.util.CpfUtils;
import com.d3n15tecback.util.TelefoneUtils;

public class UsuarioHelper {

    private UsuarioHelper() {
        //TODO
    }

    public static boolean validaCPF(String cpf) throws AcaoNaoPermitidaException {
        if (!CpfUtils.isValid(cpf)) {
            throw new AcaoNaoPermitidaException("CPF Inválido");
        } else
            return Boolean.TRUE;
    }

    public static boolean validaTelefone(String telefone) throws AcaoNaoPermitidaException {
        if (!TelefoneUtils.isValidTelefoneCelular(telefone)) {
            throw new AcaoNaoPermitidaException("Telefone Inválido");
        } else
            return Boolean.TRUE;
    }

}