import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LeaveTypesPage } from '../../page-objects/Leave-page';

const leaveTypesPage = new LeaveTypesPage();

Given('the user is logged in and on the Leave Types page', () => {
    leaveTypesPage.visitLeaveTypesPage();
});

When('the user clicks on the "Filters" button', () => {
    cy.get('.ant-col-18 > .ant-space > :nth-child(2) > .ant-btn').click(); 
});


Then('the "Filter" modal should open', () => {  
  cy.get('.ant-modal-content').should('be.visible');
});


Then('the modal header should be "Leave Types"', () => {
  cy.get('.ant-modal-title').should('have.text', 'Leave Types'); 
});
