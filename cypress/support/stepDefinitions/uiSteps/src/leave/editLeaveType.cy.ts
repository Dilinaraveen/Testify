import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { LeaveTypesPage } from '../../page-objects/Leave-page';

const leaveTypePage = new LeaveTypesPage();

Given('the user is on the Leave Type page', () => {
    leaveTypePage.visitLeaveTypesPage(); // Assuming you have a method to visit the page
});

When('the user clicks the "Edit" button', () => {
    cy.get('tr.ant-table-row') // Find the first row (or any row depending on the condition)
      .first() 
      .find('.ant-space > :nth-child(1) > .ant-tag') // Edit button class or locator
      .click(); 
});

Then('the "LeaveTypes" modal should be visible', () => {
    cy.get('.ant-modal-content') // This assumes the modal has this class
      .should('be.visible');
});

And('the user appends " Edited" to the existing leave type in the leave name field', () => {
    cy.get('#name') // Assuming this is the field for the leave type name
      .invoke('val') // Get the current value of the leave name
      .then((currentName) => {
          const updatedName = currentName + ' Edited';
          cy.get('#name')// Now set the new value with "Edited"
            .clear() // Clear the existing value
            .type(updatedName); // Type the new name with "Edited"
      });
});

And('the user clicks the "Save" button', () => {
    cy.get('[style="padding-left: 8px; padding-right: 8px; text-align: right;"] > .ant-space > :nth-child(2) > .ant-btn')
      .click();
});

Then('the leave name should be updated with " Edited" appended to the existing name', () => {
    cy.wait(1000); // Optionally wait for a second to let the UI update
    cy.get('.ant-table-row') // Get all rows in the table
      .first() // Select the first row
      .find('td.ant-table-cell:nth-child(2)') // Target the second column (leave name column)
      .should('include.text', 'Edited'); // Verify that "Edited" is part of the leave name text
});
