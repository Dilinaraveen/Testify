import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const PROFILE_ICON = '.dropdown.user > .dropdown-toggle';

const SIGN_OUT_BTN = '.pull-right > .btn';

const LOGIN_BUTTON = '#loginForm > .mb-8 > .btn';

Given('the user is in dashboard', () => {
    cy.visit(Cypress.env('BASE_URL'));
});

When('the user click profile icon', () => {
    cy.get(PROFILE_ICON).click();
});

When('the user click the signout button', () => {
    cy.get(SIGN_OUT_BTN).click();
});

Then('the user redirect to login page', () => {
    cy.get(LOGIN_BUTTON).should('be.visible');
})