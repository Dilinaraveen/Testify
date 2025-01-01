import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

let response: Cypress.Response<Book>;

Given('the API endpoint is ready', () => {
  cy.log('API endpoint is ready');
});

When('the user send a POST request to create a book', () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('API_URL')}/api/books`, // API endpoint
    headers: {
      Authorization: Cypress.env('API_AUTHORIZATION'), // Basic auth header
    },
    body: {
      id: 1,
      title: 'new title',
      author: 'new author',
    },
  }).then((res) => {
    response = res;
  });
});

Then('the response should contain the created book', () => {
  expect(response.status).to.eq(201); // Check for CREATED status code
  expect(response.body).to.deep.equal({
    id: 1,
    title: 'new title',
    author: 'new author',
  });
});