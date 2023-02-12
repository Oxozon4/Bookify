## Requirements
- To run this application you need to have DockerDesktop application installed.

## Steps needed to run the application:
- Run run_db script from directory localdeployment 
- While beeing in localdeployment directory run command: ./run_db.sh
- While beeing in the main directory use command:
  ./mvnw.cmd clean spring-boot:run -Dspring-boot.run.profiles=local
