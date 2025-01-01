export class LoginPageObject {
    USERNAME_INPUT = '#username';

    PASSWORD_INPUT = '#password'

    LOGIN_BUTTON = '#loginForm > .mb-8 > .btn';

    DASHBOARD_NAVIGATION_BAR = '#admin_Admin > :nth-child(1) > a';

    LOGIN_FAILED_MSG = '#loginForm > .alert';

    PROFILE_ICON = '.dropdown.user > .dropdown-toggle';

    SIGN_OUT_BTN = '.pull-right > .btn';

    visitDashboard() {
        cy.visit(Cypress.env('BASE_URL'));
    }

    signin(username: string, password: string) {
        cy.get(this.USERNAME_INPUT).type(username);
        cy.get(this.PASSWORD_INPUT).type(password);
        cy.get(this.LOGIN_BUTTON).click();
    }

    signout() {
        cy.get(this.PROFILE_ICON).click();
        cy.get(this.SIGN_OUT_BTN).click();
    }
}