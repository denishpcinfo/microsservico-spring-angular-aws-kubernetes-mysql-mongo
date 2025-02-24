# Projeto de Microsserviço com Spring Cloud, Kubernetes, Docker(Docker Hub), Eureka, Spring (3.1.6 e 2.7.12), Maven, Angular 16, My SQL, MongoDB, AWS(IAM, EC2, EKS e RDS), Jenkins CD, Argo DC e Github(Git Hooks).

Visão Geral
Este projeto implementa uma arquitetura de microsserviços utilizando Spring Cloud, Kubernetes e Docker para entrega e escalabilidade. Os microsserviços são escritos em Spring Boot (versões 3.1.6 e 2.7.12) e se comunicam via Eureka Service Discovery.

O frontend é desenvolvido em Angular 16 e a solução utiliza MySQL e MongoDB como bancos de dados. A infraestrutura é provisionada na AWS utilizando IAM, EC2, EKS e RDS. O ciclo de vida da aplicação é gerenciado com Jenkins CD, ArgoCD e Git Hooks.

# Tecnologias Utilizadas

Backend:
-  Spring Boot (3.1.6 e 2.7.12)
-  Spring Cloud (Eureka, Config Server, API Gateway)
-  Maven 
-  MySQL e MongoDB 
-  Docker e Docker Hub 
-  Kubernetes (EKS)
-  AWS IAM, EC2, EKS, RDS 

Frontend:
-  Angular 16

DevOps e CI/CD:
-  Jenkins CD
-  ArgoCD
-  Git Hooks

# Arquitetura do Projeto

1.  Eureka Server:  Service discovery para registro e descoberta de microsserviços.
2.  Config Server:  Centraliza configurações dinâmicas dos microsserviços.
3.  API Gateway:  Roteamento e segurança dos serviços.
4.  Microsserviços Independentes:  Implementados em Spring Boot, cada um com sua responsabilidade.
5.  Banco de Dados:  MySQL para dados relacionais e MongoDB para documentos.
6.  Docker & Kubernetes:  Containerização e orquestração dos serviços.
7.  CI/CD:  Jenkins para integração contínua e ArgoCD para entrega contínua.

O arquivo "sql projeto microservice" na raiz do projeto, possui os SQLs para popular os bancos.

![294773985-20352f92-cc9a-4670-94f5-ef3ba256e3b6](https://github.com/denishpcinfo/microsservico-spring-angular-aws-kubernetes-mysql-mongo/assets/17712719/6a96ddf8-ccbb-40ea-9a02-566154ab3d9e)


# Pipeline

![CI CD Flow2](https://github.com/denishpcinfo/microsservico-spring-angular-aws-kubernetes-mysql-mongo/assets/17712719/fc9d43b0-950c-4ddb-b112-0d5549aace56)


# Micro Serviços
![Captura de tela de 2024-04-17 20-55-04](https://github.com/denishpcinfo/microsservico-spring-angular-aws-kubernetes-mysql-mongo/assets/17712719/b42f335a-59b2-4aae-94ba-2c5c99de43cb)

# Kubernetes
![Captura de tela de 2024-11-06 13-22-18](https://github.com/user-attachments/assets/912b797a-fb1d-488d-8bae-64af98ce5980)

# Pedido salvo MongoDB
![Captura de tela de 2024-04-13 22-32-00](https://github.com/denishpcinfo/microsservico-spring-angular-aws-kubernetes-mysql-mongo/assets/17712719/b52c5f62-ed83-4f2f-80d4-849fb5026cc6)

![Captura de tela de 2024-04-13 22-32-48](https://github.com/denishpcinfo/microsservico-spring-angular-aws-kubernetes-mysql-mongo/assets/17712719/0d02d4c7-6904-4ad5-9a15-d50f9f20b1ec)


Obs:Projeto em desenvolvimento, implementando Kafka!
