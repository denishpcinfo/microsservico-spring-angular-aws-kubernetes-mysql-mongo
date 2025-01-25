package com.d3n15_tec.gateway.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class MessageForwarder {

    private final WebClient webClient;

    public MessageForwarder(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://localhost:8081").build();
    }

    public void forwardMessage(String message) {
        webClient.post()
                .uri("/api/process-message")
                .bodyValue(message)
                .retrieve()
                .bodyToMono(Void.class)
                .subscribe(
                        success -> System.out.println("Mensagem encaminhada com sucesso."),
                        error -> System.err.println("Erro ao encaminhar mensagem: " + error.getMessage())
                );
    }





}
