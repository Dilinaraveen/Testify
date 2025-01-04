import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import {DocumentPageObject} from "../../page-objects/DocumentPageObject";

const document = new DocumentPageObject();

let str = null;

Given('the user is on document page', () => {
    document.visitDocumentPage();
});

When('the user create a document type', () => {
    str = document.createDocument();
})

Then('new document type will be shown in table', () => {
    cy.contains(str);
})

When('the user edit a document type', () => {
    str = document.editDocumentType();
});

Then('it will be shown in table', () => {
    cy.wait(500);
    cy.contains(str);
});
