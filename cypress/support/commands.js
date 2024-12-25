const USERNAME_INPUT = '#username';

const PASSWORD_INPUT = '#password'

const LOGIN_BUTTON = '#loginForm > .mb-8 > .btn';

Cypress.Commands.add('loginAuth', (username, password) => {
    cy.session(
        [username, password],
        () => {
            cy.visit(Cypress.env('BASE_URL'));
            cy.get(USERNAME_INPUT).type(username);
            cy.get(PASSWORD_INPUT).type(password);
            cy.get(LOGIN_BUTTON).click();
        }
    )
})