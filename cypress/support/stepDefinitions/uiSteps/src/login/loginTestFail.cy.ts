import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const USERNAME_INPUT = '#username';

const PASSWORD_INPUT = '#password'

const LOGIN_BUTTON = '#loginForm > .mb-8 > .btn';

const LOGIN_FAILED_MSG = '#loginForm > .alert';

Given('the user is on the login page', () => {
  cy.visit(Cypress.env('BASE_URL'));
});

When('the user enters a invalid username and password', () => {
  cy.get(USERNAME_INPUT).type('wrongusername');
  cy.get(PASSWORD_INPUT).type(Cypress.env('LOGIN_PASSWORD'));
});

When('clicks the login button', () => {
  cy.get(LOGIN_BUTTON).click();
});

Then('the user should be seen invalid credential message', () => {
  cy.get(LOGIN_FAILED_MSG).should('contain', 'Login failed');
});