FROM frolvlad/alpine-oraclejdk8:slim

VOLUME /tmp

COPY services/ProfileService/build/libs/CGI-CHHS-ADPQ-ProfileService-0.0.1-SNAPSHOT.jar app.jar

RUN sh -c 'touch /app.jar'

ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom", " -Dspring.profiles.active=testing","-jar","/app.jar"]
