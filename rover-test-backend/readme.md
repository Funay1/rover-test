# Vehicle loan

## Solution

- To make the code more readable, I create some states called LoanTermRange and CreditScoreRange that are used to meet business requirements.

- To solve the problems and meet all business requirements, I created a function that calculates minumumLoanAmount, maximumLoanAmount based on lendTerm and creditScore and checked if lendAmount is between these values.

- After validating the loanAmount, I calculated the AprPercentage for standard scenarios (base table in the challenge description) and then applied the special rules to create the one based on the year and mileage of the vehicle
## Prerequisites

- NodeJS Version V18.20.2, NPM 10.5.5 (you can use VOLTA lib to automatic use it on this project)

npm install

`npm install` installs `node_modules` on your host machine. This is only necessary for your editor to function properly. 

## Documentation

-  The swagger documentation can be found acessing localhost:3000/docs

## USAGE EXAMPLE

- curl -X 'GET' \
  'http://localhost:3000/v1/vehicle/apr?loanAmount=10000&loanTerm=36&creditScore=700&vehicleYear=2014&vehicleMileage=50000' \
  -H 'accept: application/json'

Response expected: 
{
  "aprRate": "5.75%"
}

## Starting application

1. Run npm start

## Running Tests Locally

### Integration

1. Run `npm run test:integration` 

### Unit

1. Run `npm run test:unit`

## Last Coverage summary
- 
=============================== Coverage summary ===============================
Statements   : 90.47% ( 228/252 )
Branches     : 65.38% ( 17/26 )
Functions    : 85.71% ( 12/14 )
Lines        : 90.47% ( 228/252 )
================================================================================
Test Suites: 3 passed, 3 total
Tests:       37 passed, 37 total
