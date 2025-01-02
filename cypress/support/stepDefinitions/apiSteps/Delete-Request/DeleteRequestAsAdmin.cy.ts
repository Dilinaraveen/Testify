import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
let response;
let idtoDelete = 5;

Given('the User is logged in and the API endpoint is ready', () => {
  cy.log('API endpoint is ready');
});

When('the user sends a Delete request to Delete a book', () => {
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

Then('the response should be "User is not permitted"', () => {
  expect(response.status).to.eq(403); // Check for CREATED status code
//   expect(response.body).to.have.property('message','User is not permitted.')
});


  