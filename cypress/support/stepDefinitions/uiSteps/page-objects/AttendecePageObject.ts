export class AttendecePageObject {
    CategoryBtn = '[ref="admin_Manage"] > [href="#"]';

    AttendenceBtn = '#admin_Manage > :nth-child(2) > a';

    AttendenceURL = '/?g=admin&n=attendance&m=admin_Manage'

    AttendenceAddNewBtn = '[style=""] > .ant-btn'

    AttendenceAddNewPopUpID = '.ant-modal-header'

    VisitHomePage() {
        cy.visit(Cypress.env('BASE_URL'));
    }

    ClickOnManageCatergoryBtn(){
        cy.get(this.CategoryBtn).click()
    }

    CheckVisibilityOfAttendence(){
        cy.get(this.AttendenceBtn).should('be.visible')
    }

    VisitAttendecePage(){
        cy.visit(Cypress.env('BASE_URL')+this.AttendenceURL);
    }

    ClickonAddnewBtnInAttendence(){
        cy.get(this.AttendenceAddNewBtn).click()
    }

    AttendeceAddNewPopUpVisible(){
        cy.get(this.AttendenceAddNewPopUpID).should('be.visible')
    }

}