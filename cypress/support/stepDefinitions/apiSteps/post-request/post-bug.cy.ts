import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

let response: Cypress.Response<Book>;

Given('the API endpoint is ready', () => {
    cy.log('API endpoint is ready');
});

When('the admin sends a POST request without title to create a book', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/api/books`, // API endpoint
        headers: {
            Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'), // Basic auth header
        },
        body: {
            id: 1,
            author: 'new author',
        },
        failOnStatusCode: false
    }).then((res) => {
        response = res;
    });
});

Then('the response should be bad request', () => {
    expect(response.status).to.eq(400); // Check for BAD REQUEST status code
});

When('the admin sends a POST request without author to create a book', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/api/books`, // API endpoint
        headers: {
            Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'), // Basic auth header
        },
        body: {
            id: 1,
            title: 'new title',
        },
        failOnStatusCode: false
    }).then((res) => {
        response = res;
    });
});

Then('the response should be bad request', () => {
    expect(response.status).to.eq(400); // Check for BAD REQUEST status code
});

When('the admin sends a POST request with author as numeric value', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/api/books`, // API endpoint
        headers: {
            Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'), // Basic auth header
        },
        body: {
            id: 1,
            title: 'new title',
            author: 1,
        },
    }).then((res) => {
        response = res;
    });
});

Then('the admin should be bad request', () => {
    expect(response.status).to.eq(400); // Check for BAD REQUEST status code
});