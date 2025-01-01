import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { LoginPageObject } from '../../page-objects/Login';

const loginPageObject = new LoginPageObject();

const DASHBOARD_NAVIGATION_BAR = '#admin_Admin > :nth-child(1) > a';

Given('the user is on the login page', () => {
  loginPageObject.visitDashboard();
});

When('the user enters a valid username and password and press login', () => {
  loginPageObject.signin(Cypress.env('LOGIN_USERNAME'), Cypress.env('LOGIN_PASSWORD'));
});

Then('the user should be redirected to the dashboard', () => {
  cy.get(DASHBOARD_NAVIGATION_BAR).should('contain', 'Dashboard');
});