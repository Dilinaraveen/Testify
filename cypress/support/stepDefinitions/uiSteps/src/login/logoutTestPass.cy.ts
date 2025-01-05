import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { LoginPageObject } from '../../page-objects/Login';

const loginPageObject = new LoginPageObject();

const LOGIN_BUTTON = '#loginForm > .mb-8 > .btn';

Given('the user is in dashboard', () => {
    loginPageObject.visitDashboard();
});

When('the user signout', () => {
    loginPageObject.signout();
});

Then('the user redirect to login page', () => {
    cy.get(LOGIN_BUTTON).should('be.visible');
})
