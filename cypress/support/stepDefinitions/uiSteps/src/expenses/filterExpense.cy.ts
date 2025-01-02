import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { Expenses } from '../../page-objects/Expenses';

const TYPE = 'Auto - Payment';

const expenses = new Expenses();

Given('the user is on expense page', () => {
    expenses.visitExpenseTab();
});

When('the user search the expense type', () => {
    expenses.filterType(TYPE);
});

Then('it only visible in table', () => {
    expenses.checkNoOfRows();
});