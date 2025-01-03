export class PutRequestBookApi {

    ensureBookExists(bookId: number, bookDetails: { id: number; title: string; author: string }) {
      cy.request({
        method: 'GET',
        url: `${Cypress.env('API_URL')}/api/books/${bookId}`,
        headers: {
          Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'),
        },
        failOnStatusCode: false,
      }).then((res) => {
        if (res.status === 404) {
          cy.request({
            method: 'POST',
            url: `${Cypress.env('API_URL')}/api/books`,
            headers: {
              Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'),
            },
            body: bookDetails,
          });
        }
      });
    }
  
    cleanupBook(bookId: number) {
      cy.request({
        method: 'DELETE',
        url: `${Cypress.env('API_URL')}/api/books/${bookId}`,
        headers: {
          Authorization: Cypress.env('API_AUTHORIZATION_ADMIN'),
        },
        failOnStatusCode: false, // Don't fail if the book doesn't exist
      }).then((res) => {
        cy.log(`Cleanup book ID: ${bookId}, Status: ${res.status}`);
      });
    }
  }
  
  