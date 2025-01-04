import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { PutRequestBookApi } from '../page-objects/PutRequest';

let getBooksResponse: Cypress.Response<any[]>;


Given('the API endpoint for get all book list is ready', () => {
  cy.log('API endpoint is ready for retrieving all books');
});

When('the user sends a GET request to retrieve all books when no records exist', () => {
    
    cy.request({
      method: 'GET',
      url: `${Cypress.env('API_URL')}/api/books`,
      headers: {
        Authorization: Cypress.env('API_AUTHORIZATION_USER'),
      },
    }).then((res) => {
      getBooksResponse = res;
    });
  });
  
Then('the response should indicate an empty list of books', () => {
    expect(getBooksResponse.status).to.eq(200);
    expect(getBooksResponse.body).to.be.an('array').that.is.empty;
});

When('the user sends a GET request to retrieve all books', () => {
    
  cy.request({
    method: 'GET',
    url: `${Cypress.env('API_URL')}/api/books`,
    headers: {
      Authorization: Cypress.env('API_AUTHORIZATION_USER'),
    },
  }).then((res) => {
    getBooksResponse = res;
  });
});

Then('the res status should be 200', () => {
  expect(getBooksResponse.status).to.eq(200);
});

Then('the response should contain a array', () => {
    expect(getBooksResponse.body).to.be.an('array');
  });


