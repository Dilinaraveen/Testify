import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const USERNAME_INPUT = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';

const PASSWORD_INPUT = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'

const LOGIN_BUTTON = '.oxd-button';

const DASHBOARD_TITLE = '.oxd-topbar-header-title';

Given('the user is on the login page', () => {
  cy.visit(Cypress.env('BASE_URL'));
});

When('the user enters a valid username and password', () => {
  cy.get(USERNAME_INPUT).type(Cypress.env('LOGIN_USERNAME'));
  cy.get(PASSWORD_INPUT).type(Cypress.env('LOGIN_PASSWORD'));
});

When('clicks the login button', () => {
  cy.get(LOGIN_BUTTON).click();
});

Then('the user should be redirected to the dashboard', () => {
  cy.get(DASHBOARD_TITLE).should('contain', 'Dashboard');
});


