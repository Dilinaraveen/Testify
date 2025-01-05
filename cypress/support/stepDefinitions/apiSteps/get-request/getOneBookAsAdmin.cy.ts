import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

let response: Cypress.Response<Book>;
let GetID = 1;
Given('the API endpoint is ready logged in as Admin', () => {
  cy.log('API endpoint is ready');
});

When('the admin sends a GET request to retrieve a book', () => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('API_URL')}/api/books/${GetID}`,
    headers: {
      Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'),
    },
  }).then((res) => {
    response = res;
  });
});

Then('the response should contain the details of the requested book with status code 200 or return a Book not found error with status code 404', () => {
    if (response.status === 200) {
    expect(response.status).to.eq(200); 
    expect(response.body).to.deep.equal({
        "id": 1,
        "title": "new title",
        "author": null
    });
  } else if (response.status === 404) { 
    expect(response.status).to.eq(404); 
    expect(response.body).to.have.property('message', 'Book not found'); // Validate error message
  } else {
    // Unexpected status code
    throw new Error(`Unexpected status code: ${response.status}`);  
}
});

