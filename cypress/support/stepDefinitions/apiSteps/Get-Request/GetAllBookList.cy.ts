import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { PutRequestBookApi } from '../page-objects/PutRequest';

let getBooksResponse: Cypress.Response<any[]>;

const putRequestBookApi = new PutRequestBookApi();

Given('the API endpoint for get all book list is ready', () => {
  cy.log('API endpoint is ready for retrieving all books');
});

When('the user sends a GET request to retrieve all books', () => {
    putRequestBookApi.ensureBookListExist([
    { id: 1, title: 'Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' },
  ]);

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

Then('the response should contain a list of books', () => {
  expect(getBooksResponse.body).to.be.an('array').that.is.not.empty;
  expect(getBooksResponse.body).to.have.length(2);

  expect(getBooksResponse.body[0]).to.deep.equal({
    id: 1,
    title: 'Book One',
    author: 'Author One',
  });

  expect(getBooksResponse.body[1]).to.deep.equal({
    id: 2,
    title: 'Book Two',
    author: 'Author Two',
  });
});
