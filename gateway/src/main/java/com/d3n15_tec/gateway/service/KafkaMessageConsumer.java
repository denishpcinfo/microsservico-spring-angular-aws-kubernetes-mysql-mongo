package com.d3n15_tec.gateway.service;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.stereotype.Service;

@Service
public class KafkaMessageConsumer {

    @Autowired
    private MessageForwarder messageForwarder;

    @KafkaListener(topics = {"api-events"}, groupId = "gateway-group")
    public void consume(ConsumerRecord<String, String> record, Acknowledgment acknowledgment) {
        System.out.println("Mensagem recebida no Gateway:");
        System.out.println("Tópico: " + record.topic());
        System.out.println("Mensagem: " + record.value());

        //messageForwarder.forwardMessage(record.value());
        acknowledgment.acknowledge();
    }
}
