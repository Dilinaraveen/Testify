import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LeaveTypesPage } from '../../page-objects/Leave-page';

const leaveTypesPage = new LeaveTypesPage();

Given('the user is on the Leave Type page', () => {
    leaveTypesPage.visitLeaveTypesPage();
});

When('the user clicks on the "Add New" button', () => {
    cy.get('[style=""] > .ant-btn').click();
});

Then('the "LeaveType" modal opens', () => {
    cy.get('.ant-modal-content').should('be.visible');
});

When('the user clicks on the "Save" button without entering any information', () => {
    cy.get('[style="padding-left: 8px; padding-right: 8px; text-align: right;"] > .ant-space > :nth-child(2) > .ant-btn').click();
});

Then('the error message "Leave Name: is required" should be displayed', () => {
    cy.get('#name_help > .ant-form-item-explain-error').should('be.visible');
});