import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const ADMIN_TAB = ':nth-child(1) > .oxd-main-menu-item';

const ADMIN_TITLE = '.oxd-topbar-header-breadcrumb-module';

Given('the user is on the dashboard page', () => {
  cy.visit(Cypress.env('BASE_URL'));
});

When('the user click admin tab in side navigation bar', () => {
  cy.get(ADMIN_TAB).click();
});

Then('the user should be redirected to the admin tab', () => {
  cy.get(ADMIN_TITLE).should('contain', 'Admin');
});

