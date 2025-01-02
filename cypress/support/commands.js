const USERNAME_INPUT = '#username';

const PASSWORD_INPUT = '#password'

const LOGIN_BUTTON = '#loginForm > .mb-8 > .btn';

const DASHBOARD_NAVIGATION_BAR = '#admin_Admin > :nth-child(1) > a';
const MANAGE_MAIN_MENU = '.treeview:nth-child(3) > a[href="#"]';
const LEAVE_SUB_MENU_ITEM = '.treeview-menu > li:nth-child(4) a[href*="n=leaves&m=admin_Manage"]';


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

// Cypress.Commands.add('navigateToLeavePage', () => {
//   // Ensure the user is on the dashboard
//   cy.get(DASHBOARD_NAVIGATION_BAR).should('contain', 'Dashboard');

//   // Navigate to "Manage > Leave"
//   cy.get(MANAGE_MAIN_MENU).click(); // Click "Manage" menu
//   cy.get('.treeview-menu').should('be.visible'); // Verify submenu is visible
//   cy.get(LEAVE_SUB_MENU_ITEM).click(); // Click "Leave" submenu

//   // Verify "Leave Types" tab is loaded
//   cy.url().should('include', 'g=admin&n=leaves&m=admin_Manage');
// });