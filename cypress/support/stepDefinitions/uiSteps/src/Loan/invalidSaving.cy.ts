import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { LoanPageObject } from '../../page-objects/LoanPageObject';

const LoanObject = new LoanPageObject()

const UserInput = '#name'
const SaveButton = '.col-sm-9 > .saveBtn'
const NameText = '#field_name > .control-label'

Given('the user is on the Add New Loan Type form page', () => {
  LoanObject.VisitLoanPage()
});

When('the user clicks the Add New Button', () => {
  LoanObject.ClickAddNewButton()
});

When('the user leaves the Name field empty', () => {
  cy.get(UserInput).invoke('val').should('be.empty')
});

When('clicks the Save button', () => {
  cy.get(SaveButton).click()
});

Then('the user should see the Name field change color to red', () => {
    cy.get(NameText).should('have.css', 'color', 'rgb(255, 0, 0)');
});