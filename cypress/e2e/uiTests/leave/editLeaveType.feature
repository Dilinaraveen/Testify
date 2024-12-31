Feature: Edit LeaveType

  Scenario: User selects the leave type and edit the leave type
    Given the user is on the Leave Type page
    When the user clicks the "Edit" button
    Then the "LeaveTypes" modal should be visible
    And the user appends " Edited" to the existing leave type in the leave name field
    And the user clicks the "Save" button
    Then the leave name should be updated with " Edited" appended to the existing name