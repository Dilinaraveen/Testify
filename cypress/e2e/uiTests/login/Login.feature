# Make sure to change 'User fails to logs in to the system' sentence in e2e.js file in order to skip session creation before login function only
# Make sure to change 'User logs in to the system Successfully' sentence in e2e.js file in order to skip session creation before login function only

Feature: Login functionality

  Scenario: User logs in to the system Successfully
    Given the user is on the login page1
    When the user enters a valid username and password1
    And clicks the login button1
    Then the user should be redirected to the dashboard1

  Scenario: User fails to logs in to the system
    Given the user is on the login page
    When the user enters a invalid username and password
    And clicks the login button
    Then the user should be seen invalid credential message

  Scenario: User logs out of the the system Successfully
    Given the user is in dashboard
    When the user click profile icon
    And the user click the signout button
    Then the user redirect to login page