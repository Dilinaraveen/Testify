import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { TrainingPage } from '../../page-objects/Training-page';

const trainingPage = new TrainingPage();

Given('the user is on the Training page', () => {
    trainingPage.visitTrainingPage();
});

When('the user clicks the "Add New" button', () => {
    cy.get('.ant-space-item > .ant-btn').click(); // Adjust selector if needed
});

Then('the "Courses" modal should be visible', () => {
    cy.get('.ant-modal-content').should('be.visible'); // Check modal visibility
});

Then('the modal header should be "Courses"', () => {
    cy.get('.ant-modal-title').should('have.text', 'Courses'); // Verify modal title
});
