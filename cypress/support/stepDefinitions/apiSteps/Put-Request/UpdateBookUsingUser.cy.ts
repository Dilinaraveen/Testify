import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let userResponse: Cypress.Response<any>;

Given('the User is logged in and the API endpoint is ready', () => {
  cy.log('User is logged in and API endpoint is ready');
});

When('the User sends a PUT request to update a book', () => {
  cy.request({
    method: 'PUT',
    url: `${Cypress.env('API_URL')}/api/books/1`, // Replace with the actual ID to update
    headers: {
      Authorization: Cypress.env('API_AUTHORIZATION_USER'), // Use User authorization
    },
    body: {
      id: 1,
      title: 'Attempted Update Title',
      author: 'Attempted Update Author',
    },
    failOnStatusCode: false, 
  }).then((res) => {
    userResponse = res;
  });
});

Then('the response status should be 403', () => {
  expect(userResponse.status).to.eq(403);
});

Then('the response message should be User is not permitted.', () => {
  expect(userResponse.body).to.eq('User is not permitted.');
});
