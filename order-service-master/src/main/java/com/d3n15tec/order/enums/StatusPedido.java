package com.d3n15tec.order.enums;

public enum StatusPedido {

    PEDIDO_REALIZADO("Pedido realizado"),
    PREPARANDO_PEDIDO("Preparando pedido"),
    PEDIDO_RETIRADO_ENTREGADOR("Pedido retirado pelo entregador"),
    PEDIDO_ENTREGUE("Pedido entregue");

    private final String descricao;

    StatusPedido(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricao() {
        return descricao;
    }
}
