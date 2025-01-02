import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Expenses } from '../../page-objects/Expenses';

const TYPE_NAME = 'Test-Type';

const expenses = new Expenses();

Given('the user is on expense page', () => {
    expenses.visitExpenseTab();
});;

When('the user create a new expense type', () => {
    expenses.createNewExpense(TYPE_NAME);
});

Then('it will be shown in expense table', () => {
    expenses.checkAvailabilityInTable(TYPE_NAME);
});