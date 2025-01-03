export class DocumentPageObject {
    DOCUMENT_PAGE_URL = '?g=admin&n=documents&m=admin_Manage';
    DOCUMENT_TYPE_TAB = '#tabDocument';
    FIRST_DOCUMENT_EDIT_BUTTON = '[data-row-key="1"] > :nth-child(3) > .ant-space > :nth-child(1) > .ant-tag';
    FIRST_DOCUMENT_NAME = '[data-row-key="1"] > :nth-child(1)';
    NAME_INPUT = '#name'

    SAVE_BUTTON = '.ant-space > :nth-child(2) > .ant-btn';

    visitDocumentPage() {
        cy.visit(Cypress.env('BASE_URL')+this.DOCUMENT_PAGE_URL);
    }

    editDocumentType() {
        cy.get(this.DOCUMENT_TYPE_TAB).click();
        cy.get(this.FIRST_DOCUMENT_EDIT_BUTTON).click();
        cy.get(this.NAME_INPUT).clear().type('NEW TYPE');
        cy.get(this.SAVE_BUTTON).click();
    }
}