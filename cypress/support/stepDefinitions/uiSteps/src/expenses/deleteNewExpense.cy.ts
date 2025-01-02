import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Expenses } from '../../page-objects/Expenses';

const NEW_TYPE_NAME = 'Test-Type-New';

const expenses = new Expenses();

Given('the user is on expense page', () => {
    expenses.visitExpenseTab();
});

When('the user delete the expense type', () => {
    expenses.deleteExpense(NEW_TYPE_NAME);
});

Then('the newly created record will not be available in table', () => {
    expenses.checkAvailabilityInTable(NEW_TYPE_NAME)
});