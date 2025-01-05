export class DocumentPageObject {
    DOCUMENT_PAGE_URL = '?g=admin&n=documents&m=admin_Manage';
    DOCUMENT_TYPE_TAB = '#tabDocument';
    NAME_INPUT = '#name'
    SAVE_BUTTON = '.ant-space > :nth-child(2) > .ant-btn';
    DELETE_BUTTON = '#deleteModel > .modal-dialog > .modal-content > .modal-footer > .btn-primary';

    visitDocumentPage() {
        cy.visit(Cypress.env('BASE_URL')+this.DOCUMENT_PAGE_URL);
    }

    createDocument() {
        cy.get(this.DOCUMENT_TYPE_TAB).click();
        cy.get('[data-row-key="1"] > :nth-child(3) > .ant-space > :nth-child(3) > .ant-tag').click();
        cy.get(this.NAME_INPUT).clear().type('newName');
        cy.get(this.SAVE_BUTTON).click();
    }

    editDocumentType() {
        cy.get(this.DOCUMENT_TYPE_TAB).click();
        cy.get('.ant-table tbody.ant-table-tbody tr').each(($row) => {
            cy.wrap($row)
                .find('td')
                .eq(0)
                .invoke('text')
                .then((cellText) => {
                    if (cellText.trim() === "newName") {
                        cy.wrap($row)
                            .invoke('attr', 'data-row-key')
                            .then((rowKey) => {
                                const dynamicSelector = `[data-row-key="${rowKey}"] > :nth-child(3) > .ant-space > :nth-child(1) > .ant-tag`;

                                cy.get(dynamicSelector).click({force:true});
                                cy.wait(500);
                                cy.get(this.NAME_INPUT).clear().type('IDNew');
                                cy.get(this.SAVE_BUTTON).click({force:true});
                            });
                    }
                });
        });
    }

    deleteDocumentType() {
        cy.get(this.DOCUMENT_TYPE_TAB).click()
        cy.wait(1000);
        cy.get('.ant-table tbody.ant-table-tbody tr').each(($row) => {
            cy.wrap($row)
                .find('td')
                .eq(0)
                .invoke('text')
                .then((cellText) => {
                    if (cellText.trim() === "IDNew") {
                        cy.wrap($row)
                            .invoke('attr', 'data-row-key')
                            .then((rowKey) => {
                                const dynamicSelector = `[data-row-key="${rowKey}"] > :nth-child(3) > .ant-space > :nth-child(2) > .ant-tag`;

                                cy.get(dynamicSelector).click({force:true});
                                cy.get(this.DELETE_BUTTON).click({force:true});
                            });
                    }
                });
        });
    }
}