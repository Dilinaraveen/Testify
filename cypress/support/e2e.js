import './commands';

const LOGIN_TESTS_DESCRIPTIONS = [
  'User logs in to the system Successfully',
  'User fails to logs in to the system',
];

// Run before each test
beforeEach(() => {
  const testName = Cypress.mocha.getRunner().test.fullTitle(); // Get the test name

  // Skip login session creation for specific login tests
  if (!LOGIN_TESTS_DESCRIPTIONS.some(description => testName.includes(description))) {
    cy.loginAuth(Cypress.env('LOGIN_USERNAME'), Cypress.env('LOGIN_PASSWORD'));
  }
});

// Global exception handler
Cypress.on('uncaught:exception', (err) => {
  console.error('Uncaught Exception:', err.message);
  return false;
});