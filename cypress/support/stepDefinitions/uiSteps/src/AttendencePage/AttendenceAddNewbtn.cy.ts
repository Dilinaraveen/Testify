import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { AttendecePageObject } from '../../page-objects/AttendecePageObject';

const AttendenceObject = new AttendecePageObject()

Given('the user is on the Attendence page', () => {
  AttendenceObject.VisitAttendecePage()
});

When('the user click on the Add New Button', () => {
  AttendenceObject.ClickonAddnewBtnInAttendence()
});

Then('the Add New pop up should be visible', () => {
  AttendenceObject.AttendeceAddNewPopUpVisible()
});
