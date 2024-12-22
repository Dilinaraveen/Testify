export class GoogleHomePage {
    SEARCH_BUTTON = '.FPdoLc > center > .gNO89b';

    verifyGoogleLogo() {
        cy.visit('https://www.google.com/')
        cy.get(this.SEARCH_BUTTON).should('contain', 'Google Search');
    }
}