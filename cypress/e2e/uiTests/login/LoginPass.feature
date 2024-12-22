# Make sure to change 'User logs in to the system Successfully' sentence in e2e.js file in order to skip session creation before login function only

Feature: Successful login
  Scenario: User logs in to the system Successfully
    Given the user is on the login page
    When the user enters a valid username and password
    And clicks the login button
    Then the user should be redirected to the dashboard