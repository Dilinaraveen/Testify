const USERNAME_INPUT = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';

const PASSWORD_INPUT = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';

const LOGIN_BUTTON = '.oxd-button';

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