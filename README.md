### ROVER TEST

## Project structure

- This project was organized in frontend (vueJS) and backend (nodeJS), and you need to run each one application seprarated. 

- More instructions about how to run each of them are describe on <projectFolder>/README.md.


## Rules

- The land is a square with limits on x = 100, y = 100. If any invalid operation that makes rover go out of permitted area, our backend code will throw an error. 
e.g. if the rover try to pass through a negative coordinate or a coordinate greater than LAND_LIMIT, backend will return an error.

## Running the project
- go through rover-test-frontend and execute `docker-compose up`, frontend application will start to run on port 8080.

- go through rover-test-backend and execute `docker-compose up`, backend application will start to run on port 3000.

- Open your browser and go to localhost:8080.