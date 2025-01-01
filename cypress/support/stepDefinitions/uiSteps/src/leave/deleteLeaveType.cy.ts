import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LeaveTypesPage } from '../../page-objects/Leave-page';

const leaveTypesPage = new LeaveTypesPage();

Given('the user is on the Leave Type page', () => {
    leaveTypesPage.visitLeaveTypesPage();
});

When('the user notes the current number of table rows', () => {
    cy.get('tr.ant-table-row.ant-table-row-level-0').then((rows) => {
        const rowCount: number = rows.length;
        cy.wrap(rowCount).as('initialRowCount');
        cy.log('Total Row Count:', rowCount);
    });
});

When('the user clicks the delete icon next to the first field', () => {
    cy.get('tr.ant-table-row.ant-table-row-level-0')
        .first()
        .find(':nth-child(7) > .ant-space > :nth-child(2) > .ant-tag')
        .click();
});

When('the user confirms the deletion', () => {
    cy.get('#deleteModel > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
});

Then('the number of fields should decrease by one', () => {
    cy.wait(2000);

    cy.get('@initialRowCount').then((initialRowCount) => {

        const initialCount: number = Number(initialRowCount);

        cy.get('tr.ant-table-row.ant-table-row-level-0').then((rowsAfter) => {
            const rowCountAfter: number = rowsAfter.length;
            cy.log('Row Count After Deletion:', rowCountAfter);

            expect(rowCountAfter).to.equal(initialCount - 1);
        });
    });
});
