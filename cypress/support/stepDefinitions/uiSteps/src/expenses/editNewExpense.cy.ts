import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Expenses } from '../../page-objects/Expenses';

const NEW_TYPE_NAME = 'Test-Type-New';

const expenses = new Expenses();

Given('the user is on expense page', () => {
    expenses.visitExpenseTab();
});

When('the user edit the expense type', () => {
    expenses.editExpense(NEW_TYPE_NAME);
});

Then('the changes will be shown in table', () => {
    expenses.checkAvailabilityInTable(NEW_TYPE_NAME);
});