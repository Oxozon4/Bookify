Steps needed to setup the application:
Run run_db script from directory localdeployment - while in localdeployment run command: ./run_db.sh

To run this application you need to have DockerDesktop application installed.

Next, to run the application, while beeing in the main directory use command:

./mvnw.cmd clean spring-boot:run -Dspring-boot.run.profiles=local
