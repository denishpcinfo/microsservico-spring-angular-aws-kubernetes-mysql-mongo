package com.d3n15tecback.util;

import org.apache.commons.lang.StringUtils;

public class CpfUtils {
    private static final int[] pesoCPF = {11, 10, 9, 8, 7, 6, 5, 4, 3, 2};

    private CpfUtils() {
        //TODO
    }

    public static boolean cpfIsValid(String cpf) {
        return (isValidCPF(cpf));
    }

    public static boolean isValid(String cpfCnpj) {

        if (StringUtils.containsAny(cpfCnpj.toUpperCase(), "ABCDEFGHIJKLMNOPQRSTUVXZWY")) {
            return false;
        }
        return (isValidCPF(cpfCnpj));
    }

    private static int calcularDigito(String str, int[] peso) {
        int soma = 0;
        int digito;

        for (int indice = str.length() - 1; indice >= 0; indice--) {
            digito = Integer.parseInt(str.substring(indice, indice + 1));
            soma += digito * peso[peso.length - str.length() + indice];
        }
        soma = 11 - soma % 11;
        return soma > 9 ? 0 : soma;
    }

    private static String padLeft(String text, char character) {
        return String.format("%11s", text).replace(' ', character);
    }

    private static boolean isValidCPF(String cpf) {
        if ((cpf == null) || (cpf.length() != 11)) return false;

        for (int j = 0; j < 10; j++)
            if (padLeft(Integer.toString(j), Character.forDigit(j, 10)).equals(cpf))
                return false;

        Integer digito1 = calcularDigito(cpf.substring(0, 9), pesoCPF);
        Integer digito2 = calcularDigito(cpf.substring(0, 9) + digito1, pesoCPF);
        return cpf.equals(cpf.substring(0, 9) + digito1 + digito2);
    }

}
