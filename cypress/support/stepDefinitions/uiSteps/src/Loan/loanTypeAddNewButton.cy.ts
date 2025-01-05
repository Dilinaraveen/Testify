import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { LoanPageObject } from '../../page-objects/LoanPageObject';

const AddNewForm = '#CompanyLoan_submit > .box-body'

const LoanObject = new LoanPageObject()

Given('the user is on the Loan page', () => {
  LoanObject.VisitLoanPage()
});

When('the user clicks the Add New Button', () => {
  LoanObject.ClickAddNewButton()
});

Then('the user should be navigated to Add New Loan form page', () => {
  cy.get(AddNewForm).should('be.visible');
});


