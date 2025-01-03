import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

let response: Cypress.Response<Book>;
let GetID = 1;
Given('the API endpoint is ready logged in as User', () => {
  cy.log('API endpoint is ready');
});

When('the user sends a GET request to retrieve a book', () => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('API_URL')}/api/books/${GetID}`, 
    headers: {
      Authorization: Cypress.env('API_AUTHORIZATION_USER'),
    },
  }).then((res) => {
    response = res;
  });
});

Then('the response should contain the details of the requested book with status code 200', () => {
  expect(response.status).to.eq(200); 
  expect(response.body).to.deep.equal({
    "id": 1,
    "title": "new title",
    "author": "new author"
  });
});