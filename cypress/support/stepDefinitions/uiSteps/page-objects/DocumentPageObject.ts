export class DocumentPageObject {
    DOCUMENT_PAGE_URL = '?g=admin&n=documents&m=admin_Manage';
    DOCUMENT_TYPE_TAB = '#tabDocument';
    FIRST_DOCUMENT_EDIT_BUTTON = '[data-row-key="1"] > :nth-child(3) > .ant-space > :nth-child(1) > .ant-tag';
    FIRST_DOCUMENT_DELETE_BUTTON = '[data-row-key="1"] > :nth-child(3) > .ant-space > :nth-child(2) > .ant-tag';
    FIRST_DOCUMENT_NAME = '[data-row-key="1"] > :nth-child(1)';
    NAME_INPUT = '#name'
    SAVE_BUTTON = '.ant-space > :nth-child(2) > .ant-btn';
    DELETE_BUTTON = '#deleteModel > .modal-dialog > .modal-content > .modal-footer > .btn-primary';

    visitDocumentPage() {
        cy.visit(Cypress.env('BASE_URL')+this.DOCUMENT_PAGE_URL);
    }

    createDocument() {
        let str = this.makeRandomString(5);
        cy.get(this.DOCUMENT_TYPE_TAB).click();
        cy.get('.ant-pagination-item-7 > a').click();
        cy.get('[data-row-key="89"] > :nth-child(3) > .ant-space > :nth-child(3) > .ant-tag').click();
        cy.get('#name').clear().type(str);
        cy.get('.ant-space > :nth-child(2) > .ant-btn').click();
        return str;
    }

    editDocumentType() {
        let str = this.makeRandomString(5);
        cy.get(this.DOCUMENT_TYPE_TAB).click();
        cy.get('.ant-pagination-item-7 > a').click();
        cy.get('[data-row-key="89"] > :nth-child(3) > .ant-space > :nth-child(1) > .ant-tag').click();
        cy.get(this.NAME_INPUT).clear().type(str);
        cy.get(this.SAVE_BUTTON).click();

        return str;
    }

    deleteDocumentType(str) {
        cy.get(this.DOCUMENT_TYPE_TAB).click()
        cy.get('.ant-pagination-item-7 > a').click();
        cy.wait(1000);
        cy.get('.ant-table tbody.ant-table-tbody tr').each(($row) => {
            cy.wrap($row)
                .find('td')
                .eq(0)
                .invoke('text')
                .then((cellText) => {
                    if (cellText.trim() === str) {
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

        cy.get(this.DELETE_BUTTON).click();
    }

    makeRandomString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

}