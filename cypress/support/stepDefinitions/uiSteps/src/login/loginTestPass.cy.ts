import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const USERNAME_INPUT = '#username';

const PASSWORD_INPUT = '#password'

const LOGIN_BUTTON = '#loginForm > .mb-8 > .btn';

const DASHBOARD_NAVIGATION_BAR = '#admin_Admin > :nth-child(1) > a';

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
  cy.get(DASHBOARD_NAVIGATION_BAR).should('contain', 'Dashboard');
});


