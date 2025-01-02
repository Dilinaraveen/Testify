export class LoanPageObject {
    Loan_Page_URL = '/?g=admin&n=loans&m=admin_Manage';
    AddNewButton = '.col-xs-12 > .btn';

    VisitLoanPage() {
       cy.visit(Cypress.env('BASE_URL')+this.Loan_Page_URL);
    }
    ClickAddNewButton(){
        cy.get(this.AddNewButton).click()
    }
}