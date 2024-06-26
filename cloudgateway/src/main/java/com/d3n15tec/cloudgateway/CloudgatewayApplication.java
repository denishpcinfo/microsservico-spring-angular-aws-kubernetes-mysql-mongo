package com.d3n15tec.cloudgateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@EnableDiscoveryClient
@SpringBootApplication
public class CloudgatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(CloudgatewayApplication.class, args);
	}

	@Bean
	public RouteLocator routes(RouteLocatorBuilder builder){
		return builder
				.routes()
				.route( r -> r.path("/api/autenticacao/**").uri("lb://USER-SERVICE") )
				.route( r -> r.path("/api/pedido/**").uri("lb://ORDER-SERVICE") )
				.route( r -> r.path("/api/catalogo-food/**").uri("lb://FOOD-CATALOGUE-SERVICE") )
				.route( r -> r.path("/api/users/**").uri("lb://USER-SERVICE") )
				.route( r -> r.path("/api/restaurante/**").uri("lb://RESTAURANT-SERVICE") )
				.build();
	}
}
