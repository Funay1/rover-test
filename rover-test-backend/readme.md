# Vehicle loan

## Solution

## Prerequisites

- NodeJS Version V18.20.2, NPM 10.5.5 (you can use VOLTA lib to automatic use it on this project)

npm install

`npm install` installs `node_modules` on your host machine. This is only necessary for your editor to function properly. 

## Documentation

-  The swagger documentation can be found acessing localhost:3000/docs

## USAGE EXAMPLE

- curl 'http://localhost:3000/v1/instructions' \
  -H 'Content-Type: application/json' \
  -H 'accept: application/json' \
  --data-raw $'{\n  "initialPosition": {\n    "x": 1,\n    "y": 2,\n    "direction": "N"\n  },\n  "instructions": "LMLMLMLMM"\n}'

Response expected: 
{
  "x": 1,
  "y": 3,
  "direction": "N"
}

## Starting application using docker

1. Install docker and run `docker-compose up`

## Starting application

1. Run npm start

## Running Tests Locally

### Integration

1. Run `npm run test:integration` 

### Unit

1. Run `npm run test:unit`
