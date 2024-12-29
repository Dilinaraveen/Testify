import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LeaveTypesPage } from '../../page-objects/Leave-page';

const leaveTypesPage = new LeaveTypesPage();

const ADD_NEW_BUTTON = '.ant-btn-primary:contains("Add New")';
const MODAL_CONTENT = ".ant-modal-content";
const MODAL_HEADER = ".ant-modal-header"; \

Given('the user is logged in and on the Leave Types page', () => {
    leaveTypesPage.visitLeaveTypesPage();
});

When('the user clicks on "Add New"', () => {
    cy.get(ADD_NEW_BUTTON).click(); // Replace with the actual selector
});

Then('the "LeaveType" modal should open successfully', () => {
    cy.get(MODAL_CONTENT).should("be.visible");
    cy.get(MODAL_HEADER).should("contain", "LeaveType");
});
