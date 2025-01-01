# Make sure to change 'User fails to logs in to the system' sentence in e2e.js file in order to skip session creation before login function only

Feature: Unsuccessful login1
  Scenario: User fails to logs in to the system
    Given the user is on the login page
    When the user enters a invalid username and password
    And clicks the login button
    Then the user should be seen invalid credential message