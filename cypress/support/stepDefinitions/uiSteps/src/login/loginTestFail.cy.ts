import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { LoginPageObject } from '../../page-objects/Login';

const loginPageObject = new LoginPageObject();

const LOGIN_FAILED_MSG = '#loginForm > .alert';

Given('the user is on the login page', () => {
  cy.visit(Cypress.env('BASE_URL'));
});

When('the user enters a invalid username and password and press log in', () => {
  loginPageObject.signin('wrongusername', Cypress.env('LOGIN_PASSWORD'));
});

Then('the user should be seen invalid credential message', () => {
  cy.get(LOGIN_FAILED_MSG).should('contain', 'Login failed');
});