import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let response: Cypress.Response<Book>;

Given('the API endpoint is ready', () => { cy.log('API endpoint is ready'); });

When('the user sends a POST request to create a book', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/api/books`,
        headers: { Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'), },
        body: {
            id: 1,
            title: 'new title',
            author: 'new author',
        },
    }).then((res) => { response = res; });
});

Then('the response should contain the created book', () => {
    expect(response.status).to.eq(201);
    expect(response.body).to.deep.equal({
        id: 1,
        title: 'new title',
        author: 'new author',
    });
});