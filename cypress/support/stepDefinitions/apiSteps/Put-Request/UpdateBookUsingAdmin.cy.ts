import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let updateResponse: Cypress.Response<Book>;
let bookNotFoundResponse: Cypress.Response<{ message: string }>;
let alreadyExistsResponse: Cypress.Response<any>;

Given('the API endpoint is ready', () => {
  cy.log('API endpoint is ready for updating books');
});

When('the Admin sends a PUT request to update a book', () => {
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

When('the Admin sends a PUT request to update a book with identical existing data', () => {
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
        genre: 'Updated Genre',
      },
      failOnStatusCode: false, 
    }).then((res) => {
      alreadyExistsResponse = res;
    });
  });
  
  Then('the response status should be 208', () => {
    expect(alreadyExistsResponse.status).to.eq(208);
  });
  
  Then('the response message should be Book Already Exists', () => {
    expect(alreadyExistsResponse.body).to.eq('Book Already Exists');
  });