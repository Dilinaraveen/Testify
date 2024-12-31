import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { TrainingPage } from '../../page-objects/Training-page';

const trainingPage = new TrainingPage();

Given('the user is on the Training page', () => {
    trainingPage.visitTrainingPage();
});

When('the user enters {string} into the search field', (searchTerm) => {
  cy.get('#advanced_search_searchTerm').type(searchTerm);
});

When('clicks the Search button', () => {
  cy.get('.ant-input-group-addon > .ant-btn').click();
});

Then('the search results should display {string}', (searchTerm) => {
  cy.get('.ant-table-row > :nth-child(2)').should('contain.text', searchTerm);
});
