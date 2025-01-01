import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

let response;

Given('the API endpoint is ready', () => {
  cy.log('API endpoint is ready');
});

When('the user send a POST request to create a book', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:7081/api/books', // API endpoint
    headers: {
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQ=', // Basic auth header
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
