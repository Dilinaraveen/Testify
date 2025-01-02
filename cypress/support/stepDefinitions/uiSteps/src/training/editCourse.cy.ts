import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { TrainingPage } from '../../page-objects/Training-page';

const trainingPage = new TrainingPage();

Given('the user is on the Training page', () => {
    trainingPage.visitTrainingPage(); 
});

When('the user clicks the "Edit" button in the first row', () => {
    cy.get('tr.ant-table-row')
        .first()
        .find('.ant-space > :nth-child(1) > .ant-tag')
        .click();
});

Then('the "Edit Course" modal should be visible', () => {
    cy.get('.ant-modal-content') 
        .should('be.visible'); 
});

And('the user appends " Edited" to the existing course name in the course name field', () => {

    cy.get('#name')
        .invoke('val')
        .then((currentName) => {
            const updatedName = `${currentName} Edited`;
            cy.get('#name')
                .clear()
                .type(updatedName);
        });
});

And('the user clicks the "Save" button', () => {
    cy.get('.ant-space > :nth-child(2) > .ant-btn') 
        .click();
});

Then('the course name should be updated with " Edited" appended to the existing name', () => {
    cy.get('tr.ant-table-row') 
        .first() 
        .find('td')
        .eq(1) 
        .should('include.text', 'Edited'); 
});
