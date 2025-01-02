import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
let response;
let idtoDelete = 5;

Given('the Admin is logged in and the API endpoint is ready', () => {
  cy.log('API endpoint is ready');
});

When('the Admin sends a Delete request to Delete a bookk', () => {
  cy.request({
    method: 'DELETE',
    url: `${Cypress.env('API_URL')}/api/books/${idtoDelete}`, // API endpoint
    headers: {
      Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'), // Basic auth header
    },
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
    console.log(response)
  });
});

Then('the response status should be 200', () => {
  expect(response.status).to.eq(200); // Check for CREATED status code
});


  