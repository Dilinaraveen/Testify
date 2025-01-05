import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { AttendecePageObject } from '../../page-objects/AttendecePageObject';


const AttendeceObject = new AttendecePageObject()

const SearchTextBox = '#advanced_search_searchTerm'
const SearchBtn = '.ant-input-group-addon > .ant-btn'
const TableWrapper = '.ant-table-wrapper'

Given('the user is on the Attendence Page', () => {
  AttendeceObject.VisitAttendecePage()
});

When('the user click the Search TextBox', () => {
  cy.get(SearchTextBox).click()
});

When('the user fill the Search Textbox with Search Keyword', () => {
   cy.get(SearchTextBox).type('Ice')
});

When('the user click the Search Button',()=>{
  cy.get(SearchBtn).click()
});

Then('the Employee Table should show only the relevant searched data', () => {
    cy.get(TableWrapper) 
    .each(($row) => {
      cy.wrap($row)
        .should('contain.text', 'IceHrm Employee'); 
    });
});
