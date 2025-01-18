package com.d3n15_tec.gateway.service;

import lombok.RequiredArgsConstructor;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.util.logging.Level;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class KafkaEventProducer {
    private static final Logger logger = Logger.getLogger(KafkaEventProducer.class.getName());
    private final KafkaTemplate<String, Object> kafkaTemplate;

    public void sendEvent(String topic, Object event) {
        logger.log(Level.INFO, "Enviando evento: {0} para o tópico: {1}", new Object[]{event, topic});
        kafkaTemplate.send(topic, event);
    }
}