Feature: Open Courses Modal
  Scenario: User opens the Courses modal by clicking the Add New button
    Given the user is on the Training page
    When the user clicks the "Add New" button
    Then the "Courses" modal should be visible
    And the modal header should be "Courses"
