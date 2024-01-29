package com.d3n15tecback.util;

import org.apache.commons.lang.StringUtils;

public class TelefoneUtils {

    private TelefoneUtils() {
        //TODO
    }

    public static String substituicaoNumero(String telefoneCelular) {
        if(telefoneCelular.startsWith("+55") || telefoneCelular.startsWith("55")) telefoneCelular = telefoneCelular.replace("+55", "").replace("55", "");

        telefoneCelular = telefoneCelular.replace("+", "").replace("-", "").replace("(", "").replace(")", "").replace(" ", "");

        return telefoneCelular;
    }

    public static  boolean verificaNumero(String telefoneCelular) {
        boolean verificacao = true;

        if (StringUtils.containsAny(telefoneCelular.toUpperCase(), "ABCDEFGHIJKLMNOPQRSTUVXZWY")) {
            verificacao = false;
        }

        if ((telefoneCelular == null)) verificacao = false;

        if(telefoneCelular.length() < 10) verificacao = false;

        return verificacao;
    }

    public static boolean isValidTelefoneCelular(String telefoneCelular) {
        telefoneCelular = substituicaoNumero(telefoneCelular);

        char digito;
        boolean verificacao = true;

        verificacao = verificaNumero(telefoneCelular);

        if(telefoneCelular.startsWith("0800")) verificacao = false;

        if(telefoneCelular.length() >= 10 && telefoneCelular.length() <= 13) {
            if(telefoneCelular.startsWith("0")) {
                digito = telefoneCelular.charAt(4);
                if(digito >= '6' && digito <= '9') verificacao = true;
            } else {
                digito = telefoneCelular.charAt(2);
                if(digito >= '6' && digito <= '9')verificacao = true;
            }
        } else {
            verificacao = false;
        }

        return verificacao;
    }
}
