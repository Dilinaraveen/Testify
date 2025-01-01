Feature: Successful signout
  Scenario: User logs outof the the system Successfully
    Given the user is in dashboard1
    When the user click profile icon1
    And the user click the signout button1
    Then the user redirect to login page1