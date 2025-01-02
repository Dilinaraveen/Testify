export class Expenses {
    NEW_EXPENSE_TYPE_NAME = 'Test-Type';

    MANAGE_TAB_SIDE_NAVIGATION = '[ref="admin_Manage"] > [href="#"]';

    EXPENSE_TAB = '#admin_Manage > :nth-child(6) > a';

    ADD_NEW_BUTTON = '.ant-space-item > .ant-btn';

    NAME_INPUT = '#name';

    SAVE_BUTTON = '.ant-space > :nth-child(2) > .ant-btn';

    DELETE_BUTTON = '#deleteModel > .modal-dialog > .modal-content > .modal-footer > .btn-primary';

    FIRST_PAGE = '.ant-pagination-item-1 > a';

    SECOND_PAGE = '.ant-pagination-item-2 > a';

    FIRST_RECORD_EDIT_BUTTON = '[data-row-key="1"] > :nth-child(2) > .ant-space > :nth-child(1) > .ant-tag';

    FIRST_RECORD_NAME_CELL = '[data-row-key="1"] > :nth-child(1)';

    SEARCH_INPUT = '#advanced_search_searchTerm';

    SEARCH_BUTTON = '.ant-input-group-addon > .ant-btn';

    visitExpenseTab() {
        cy.visit(Cypress.env('BASE_URL'));
        cy.get(this.MANAGE_TAB_SIDE_NAVIGATION).click();
        cy.get(this.EXPENSE_TAB).click();
    }

    createNewExpense(name: string) {
        cy.get(this.ADD_NEW_BUTTON).click();
        cy.get(this.NAME_INPUT).type(name);
        cy.get(this.SAVE_BUTTON).click();
        cy.get(this.SECOND_PAGE).click();
    }

    editExpense(newName: string) {
        cy.get(this.SECOND_PAGE).click();
        cy.wait(1000);
        cy.get('.ant-table tbody.ant-table-tbody tr').each(($row) => {
            cy.wrap($row)
              .find('td')
              .eq(0)
              .invoke('text')
              .then((cellText) => {
                if (cellText.trim() === this.NEW_EXPENSE_TYPE_NAME) {
                  cy.wrap($row)
                    .invoke('attr', 'data-row-key')
                    .then((rowKey) => {
                      const dynamicSelector = `[data-row-key="${rowKey}"] > :nth-child(2) > .ant-space > :nth-child(1) > .ant-tag`;

                      cy.get(dynamicSelector).click();
                      cy.get(this.NAME_INPUT).clear().type(newName);
                      cy.get(this.SAVE_BUTTON).click();
                    });
                }
              });
          });
    }

    deleteExpense(deleteName: string) {
        cy.get(this.SECOND_PAGE).click();
        cy.wait(1000);
        cy.get('.ant-table tbody.ant-table-tbody tr').each(($row) => {
            cy.wrap($row)
              .find('td')
              .eq(0)
              .invoke('text')
              .then((cellText) => {
                if (cellText.trim() === deleteName) {
                  cy.wrap($row)
                    .invoke('attr', 'data-row-key')
                    .then((rowKey) => {
                      const dynamicSelector = `[data-row-key="${rowKey}"] > :nth-child(2) > .ant-space > :nth-child(3) > .ant-tag`;

                      cy.get(dynamicSelector).click();
                      cy.get(this.DELETE_BUTTON).click();
                    });
                }
              });
          });
    }

    checkAvailabilityInTable(cellName: string) {
        cy.get('.ant-table tbody.ant-table-tbody tr').each(($row, index) => {
        cy.wrap($row)
        .find('td')
        .eq(0)
        .invoke('text')
        .then((cellText) => {
          if (cellText === cellName) {
            expect(cellText.trim()).to.equal(cellName);
          }
        });
        })
    }

    checkNoOfRows() {
        cy.get('.ant-table tbody.ant-table-tbody tr')
        .its('length')
        .should('eq', 1);
    }

    filterType(type: string) {
        cy.get(this.SEARCH_INPUT).type(type);
        cy.get(this.SEARCH_BUTTON).click();
    }
}