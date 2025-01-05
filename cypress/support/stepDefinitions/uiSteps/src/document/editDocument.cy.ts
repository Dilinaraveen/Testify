import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import {DocumentPageObject} from "../../page-objects/DocumentPageObject";

const document = new DocumentPageObject();


Given('the user is on document page', () => {
    document.visitDocumentPage();
});

When('the user create a document type', () => {
    document.createDocument();
})

Then('new document type will be shown in table', () => {
    cy.contains('newName');
})

When('the user edit a document type', () => {
    document.editDocumentType();
});

Then('it will be shown in table', () => {
    cy.wait(500);
    cy.contains('ID');
});

When('the user delete a document type', () => {
    document.deleteDocumentType();
});

Then('it will be not shown in table', () => {
    cy.contains('IDNew').should('not.exist');
});