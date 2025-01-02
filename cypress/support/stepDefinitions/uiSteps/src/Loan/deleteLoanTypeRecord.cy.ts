import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { LoanPageObject } from '../../page-objects/LoanPageObject';

const LoanObject = new LoanPageObject();

const ConfirmDialog = '#deleteModel > .modal-dialog > .modal-content'; 
const ConfirmButton = '#deleteModel > .modal-dialog > .modal-content > .modal-footer > .btn-primary'; 

const DeleteButtonSelector = 'img[data-original-title="Delete"]';

Given('the user is on the Add New Loan Type page', () => {
  LoanObject.VisitLoanPage();
});

When('the user clicks the delete button for a loan type record {string}', (loanTypeName) => {
  cy.contains('tr', loanTypeName).within(() => {
    cy.get(DeleteButtonSelector).click();
  });
});

When('the delete confirmation popup is displayed', () => {
  cy.get(ConfirmDialog).should('be.visible'); 
});

When('the user clicks the Delete button', () => {
  cy.get(ConfirmButton).click();
});

Then('the loan type record {string} should no longer exist', (loanTypeName) => {
  cy.contains('tr', loanTypeName).should('not.exist');
});
