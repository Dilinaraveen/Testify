Feature: Alert When Empty Text Box Present
  Scenario: Show Alert when user click save with empty Text Boxes
    Given the user is on the Attendence page
    When the user click on the Add New Button
    And the user leave TextBox Empty
    And the User click on the Save Button
    Then the Validation Text Should Appear