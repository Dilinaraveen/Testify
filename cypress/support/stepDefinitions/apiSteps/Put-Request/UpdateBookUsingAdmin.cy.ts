import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { PutRequestBookApi } from '../page-objects/PutRequest';



const putRequestBookApi = new PutRequestBookApi();


let updateResponse: Cypress.Response<Book>;
let bookNotFoundResponse: Cypress.Response<{ message: string }>;
let alreadyExistsResponse: Cypress.Response<any>;

Given('the API endpoint is ready', () => {
  cy.log('API endpoint is ready for updating books');
});

When('the Admin sends a PUT request to update a book', () => {
  putRequestBookApi.ensureBookExists(1, {
    id: 1,
    title: 'Original Book Title',
    author: 'Original Author Name',
  });

  cy.request({
    method: 'PUT',
    url: `${Cypress.env('API_URL')}/api/books/1`,
    headers: {
      Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'),
    },
    body: {
      id: 1,
      title: 'Updated Book Title',
      author: 'Updated Author Name',
    },
  }).then((res) => {
    updateResponse = res;
  });
});

Then('the response should contain the updated book details', () => {
  expect(updateResponse.status).to.eq(200);
  expect(updateResponse.body).to.deep.equal({
    id: 1,
    title: 'Updated Book Title',
    author: 'Updated Author Name',
  });
});

When('the Admin sends a PUT request to update a non-existent book', () => {
  cy.request({
    method: 'PUT',
    url: `${Cypress.env('API_URL')}/api/books/999`,
    headers: {
      Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'),
    },
    body: {
      id: 999,
      title: 'Non-existent Book Title',
      author: 'Non-existent Author',
    },
    failOnStatusCode: false,
  }).then((res) => {
    bookNotFoundResponse = res;
  });
});

Then('the response should indicate the book does not exist', () => {
  expect(bookNotFoundResponse.status).to.eq(404);
  expect(bookNotFoundResponse.body).to.eq('Book not found');
});

//--------------------------------------------------------------//

When('the Admin sends a PUT request to update a book with existing book name', () => {
  putRequestBookApi.ensureBookExists(1, {
    id: 1,
    title: 'Updated Book Title',
    author: 'Updated Author Name',
  });

  putRequestBookApi.ensureBookExists(2, {
    id: 2,
    title: 'Another Book Title',
    author: 'Another Author Name',
  });

  cy.request({
    method: 'PUT',
    url: `${Cypress.env('API_URL')}/api/books/2`,
    headers: {
      Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'),
    },
    body: {
      id: 2,
      title: 'Updated Book Title',
      author: 'Another Author Name',
    },
    failOnStatusCode: false,
  }).then((res) => {
    alreadyExistsResponse = res;
  });
});

Then('the response status code should be 200', () => {
  expect(alreadyExistsResponse.status).to.eq(200);
});

Then('the response message should be Book Already Exists', () => {
  expect(alreadyExistsResponse.body).to.deep.equal({
    id: 2,
    title: 'Updated Book Title',
    author: 'Another Author Name',
  });
});

