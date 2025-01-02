Feature: Update a Book

  Scenario: Successfully update a book with Admin login
    Given the API endpoint is ready
    When the Admin sends a PUT request to update a book
    Then the response should contain the updated book details

  Scenario: Attempt to update a non-existent book
    Given the API endpoint is ready
    When the Admin sends a PUT request to update a non-existent book
    Then the response should indicate the book does not exist

  Scenario: Attempt to update a book that already exists
    Given the Admin is logged in and the API endpoint is ready
    When the Admin sends a PUT request to update a book with identical existing data
    Then the response status should be 208
    And the response message should be "Book Already Exists"