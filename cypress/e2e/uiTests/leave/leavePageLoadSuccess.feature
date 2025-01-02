Feature: Leave Management
  As a user
  I want to navigate to the Leave page
  So that I can view the list of leave types

  Scenario: User views the Leave page
    Given the user is logged in and on the dashboard
    When the user navigates to Manage > Leave
    Then the user should see the Leave Types tab and the table