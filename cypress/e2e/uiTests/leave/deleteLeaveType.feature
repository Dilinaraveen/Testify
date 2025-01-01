Feature: Delete a Leave Type

  Scenario: User deletes a field successfully
    Given the user is on the Leave Type page
    And the user notes the current number of table rows
    When the user clicks the delete icon next to the first field
    And the user confirms the deletion
    Then the number of fields should decrease by one