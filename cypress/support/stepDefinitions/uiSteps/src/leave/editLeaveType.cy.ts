import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { LeaveTypesPage } from '../../page-objects/Leave-page';

const leaveTypePage = new LeaveTypesPage();

Given('the user is on the Leave Type page', () => {
    leaveTypePage.visitLeaveTypesPage(); 
});

When('the user clicks the "Edit" button', () => {
    cy.get('tr.ant-table-row') 
      .first() 
      .find('.ant-space > :nth-child(1) > .ant-tag')
      .click(); 
});

Then('the "LeaveTypes" modal should be visible', () => {
    cy.get('.ant-modal-content') 
      .should('be.visible');
});

And('the user appends " Edited" to the existing leave type in the leave name field', () => {
    cy.get('#name') 
      .invoke('val') 
      .then((currentName) => {
          const updatedName = currentName + ' Edited';
          cy.get('#name')
            .clear()
            .type(updatedName); 
      });
});

And('the user clicks the "Save" button', () => {
    cy.get('[style="padding-left: 8px; padding-right: 8px; text-align: right;"] > .ant-space > :nth-child(2) > .ant-btn')
      .click();
});

Then('the leave name should be updated with " Edited" appended to the existing name', () => {
    cy.wait(1000); 
    cy.get('.ant-table-row') 
      .first()
      .find('td.ant-table-cell:nth-child(2)') 
      .should('include.text', 'Edited'); 
});
