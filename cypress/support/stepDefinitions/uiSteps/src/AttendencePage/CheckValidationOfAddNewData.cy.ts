import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { AttendecePageObject } from '../../page-objects/AttendecePageObject';


const AttendeceObject = new AttendecePageObject()

const EmployeeTextBoxID = '#rc_select_0'
const SaveBtn = '[style="padding-left: 8px; padding-right: 8px; text-align: right;"] > .ant-space > :nth-child(2) > .ant-btn'
const EmployeeTextBoxValidation = '#employee_help > .ant-form-item-explain-error'

Given('the user is on the Attendence page', () => {
  AttendeceObject.VisitAttendecePage()
});

When('the user click on the Add New Button', () => {
  AttendeceObject.ClickonAddnewBtnInAttendence()
  AttendeceObject.AttendeceAddNewPopUpVisible()
});

When('the user leave TextBox Empty', () => {
  cy.get(EmployeeTextBoxID).invoke('val').should('be.empty')
});

When('the User click on the Save Button',()=>{
  cy.get(SaveBtn).click()
});

Then('the Validation Text Should Appear', () => {
  cy.get(EmployeeTextBoxValidation).should('be.visible');
});
