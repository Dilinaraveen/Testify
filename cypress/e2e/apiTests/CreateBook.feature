Feature: Create a book
  Scenario: Successfully create a book
    Given the API endpoint is ready
    When the user sends a POST request to create a book
    Then the response should contain the created book

  Scenario: Attempt to create the same book again
    Given the API endpoint is ready
    When the user sends a POST request to create a book
    And the user tries to create the same book again
    Then the response should indicate the book already exists
