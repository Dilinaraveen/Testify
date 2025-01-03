## How to run cypress
    - (UI) `npm test` to run all the test in UI
    - (Terminal) `npm run test-headless` to run all the tests with generating success / fail report
    - (Terminal) `npm run test-ui-headless` to run all UI tests without generating success/fail report
    - (Terminal) `npm run test-api-headless` to run all API tests without generating success/fail report

## How to run .jar file
    - Go to `cypress/support/stepDefinitions/apiSteps`
    - run `java -jar demo-0.0.1-SNAPSHOT.jar`

## Test end-points using postman

#### API Header values
    - Header -> key = `Authorization` , value = `Basic YWRtaW46cGFzc3dvcmQ=`
    - If use postman, simply add basic auth and provide username as `admin` / `user` and password as `password`

- eg:- http://localhost:7081/api/books for POST request with body
    ```
    {
    "id": 1,
    "title": "new title 1",
    "author": "new author 1"
    }
    ```
  
- To run specific .feature file (important for API testing)
  - `npx cypress run --spec "cypress/e2e/apiTests/CreateBook.feature"`
- To run all the api testing
  - `npm run test-api-headless`