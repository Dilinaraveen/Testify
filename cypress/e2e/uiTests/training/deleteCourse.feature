Feature: Delete a Field

  Scenario: User deletes a field successfully
    Given the user is on the Training page
    And the user notes the current number of table rows
    When the user clicks the delete icon next to the first field
    And the user confirms the deletion
    Then the number of fields should decrease by one
