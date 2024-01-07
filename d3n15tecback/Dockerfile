FROM adoptopenjdk/openjdk17:jdk-17-alpine
WORKDIR /opt
COPY target/*.jar /opt/app.jar
ENTRYPOINT exec java $JAVA_OPTS -jar app.jar