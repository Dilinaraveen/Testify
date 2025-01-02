export class TrainingPage {
    
    URL = `${Cypress.env("BASE_URL")}/?g=admin&n=training&m=admin_Manage`;
    pageUrl = '/?g=admin&n=training&m=admin_Manage';

  
    visitTrainingPage() {
        cy.visit(this.URL); 
        cy.url().should('include', this.pageUrl);  
    }
}