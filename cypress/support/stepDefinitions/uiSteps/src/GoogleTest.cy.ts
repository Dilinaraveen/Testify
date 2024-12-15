import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the google homepage', () => {
    cy.visit('https://www.google.com/');
});

When('the page title should be google', () => {
    cy.title().should('eq', 'Google');
});

Then('the google search button should be visible', () => {
    cy.get('.FPdoLc > center > .gNO89b').should('contain', 'Google Search');
});