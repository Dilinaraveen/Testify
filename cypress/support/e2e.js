import './commands';

const LOGIN_SUCCESSFUL_DESCRIPTION = 'User logs in to the system Successfully';

const LOGIN_UNSUCCESSFUL_DESCRIPTION = 'User fails to logs in to the system';

beforeEach(() => {
    const testName = Cypress.mocha.getRunner().test.fullTitle(); // Get the test name

    // Skip session creation for login-specific tests
    if (!(
        testName.includes(LOGIN_SUCCESSFUL_DESCRIPTION) ||
        testName.includes(LOGIN_UNSUCCESSFUL_DESCRIPTION)
    )) {
        cy.loginAuth(Cypress.env('LOGIN_USERNAME'), Cypress.env('LOGIN_PASSWORD'));
    }
})

Cypress.on('uncaught:exception', (err) => {
    // Ignore errors thrown by the application
    return false;
  });