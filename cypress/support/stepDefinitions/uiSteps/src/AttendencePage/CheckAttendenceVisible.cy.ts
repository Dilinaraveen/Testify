import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { AttendecePageObject } from '../../page-objects/AttendecePageObject';

const AttendeceObject = new AttendecePageObject()

Given('the user is on the homepage', () => {
  AttendeceObject.VisitHomePage()
});

When('the user Click on the Manage category', () => {
  AttendeceObject.ClickOnManageCatergoryBtn()
});

Then('the Manage drop down Open', () => {
  AttendeceObject.CheckVisibilityOfAttendence()
});
