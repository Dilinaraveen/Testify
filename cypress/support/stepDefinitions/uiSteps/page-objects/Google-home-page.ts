export class GoogleHomePage {
    SEARCH_BUTTON = '.FPdoLc > center > .gNO89b';

    verifyGoogleLogo() {
        cy.visit(Cypress.env('BASE_URL'));
        cy.get(this.SEARCH_BUTTON).should('contain', 'Google Search');
    }
}