import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { TrainingPage } from '../../page-objects/Training-page';

const trainingPage = new TrainingPage();

Given('the user is on the Training page', () => {
    trainingPage.visitTrainingPage();
});

When('the user clicks on the Add New button', () => {
    cy.wait(500);
    cy.get('.ant-space-item > .ant-btn').click({force:true});
});


Then('the courses modal opens', () => {
    cy.get('.ant-modal-content').should('be.visible');
});

When('the user clicks on the save button without entering any information', () => {
    cy.get('.ant-space > :nth-child(2) > .ant-btn').click();
});

Then('the error message "This field is required" should be displayed', () => {
    cy.get('#code_help > .ant-form-item-explain-error').should('be.visible');
});
