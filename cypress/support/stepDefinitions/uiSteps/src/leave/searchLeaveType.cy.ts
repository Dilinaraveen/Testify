import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LeaveTypesPage } from '../../page-objects/Leave-page';

const leaveTypesPage = new LeaveTypesPage();

Given('the user is logged in and on the Leave Types page', () => {
    leaveTypesPage.visitLeaveTypesPage();
});


When('the user enters "Annual leave" in the search bar', () => {
    cy.get('#advanced_search_searchTerm')
    .clear()
    .type('Annual leave');
});

When('the user clicks the "Search" button', () => {
    cy.get('.ant-input-group-addon > .ant-btn')
    .click();
});


Then('the data table should only show rows with "Annual leave"', () => {
  
    cy.get('.ant-table-row > :nth-child(2)').should('have.text', 'Annual leave'); 
});
