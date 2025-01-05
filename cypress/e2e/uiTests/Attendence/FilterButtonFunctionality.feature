Feature: Check Functionality of Filter Button
  Scenario: User choose an Employee to Filter data
    Given the user is on the Attendence Page
    When the user click the Search TextBox
    And the user fill the Search Textbox with Search Keyword
    And the user click the Search Button
    Then the Employee Table should show only the relevant searched data