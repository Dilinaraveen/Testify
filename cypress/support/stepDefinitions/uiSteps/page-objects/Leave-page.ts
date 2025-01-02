export class LeaveTypesPage {
    
    URL = `${Cypress.env("BASE_URL")}/?g=admin&n=leaves&m=admin_Manage`;
    pageUrl = '/?g=admin&n=leaves&m=admin_Manage';

  
    visitLeaveTypesPage() {
        cy.visit(this.URL); 
        cy.url().should('include', this.pageUrl);  
    }
}
