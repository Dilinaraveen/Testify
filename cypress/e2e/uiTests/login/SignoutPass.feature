Feature: Successful signout
  Scenario: User logs outof the the system Successfully
    Given the user is in dashboard
    When the user click profile icon
    And the user click the signout button
    Then the user redirect to login page