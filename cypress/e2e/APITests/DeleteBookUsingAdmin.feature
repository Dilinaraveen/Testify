Feature: Delete a book With Admin Login
  Scenario: Delete a book using Admin login
    Given the Admin is logged in and the API endpoint is ready
    When the Admin sends a Delete request to Delete a book
    Then the response should be "
    