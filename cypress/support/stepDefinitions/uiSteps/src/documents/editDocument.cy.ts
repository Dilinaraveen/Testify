import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import {DocumentPageObject} from '../../page-objects/documentPageObject';

const document = new DocumentPageObject();

Given('the user is on document page', () => {
    document.visitDocumentPage();
});

When('the user edit a company document', () => {
    document.editDocumentType();
});

Then('it will be shown in table', () => {
    cy.wait(500);
    cy.contains('NEW TYPE');
})