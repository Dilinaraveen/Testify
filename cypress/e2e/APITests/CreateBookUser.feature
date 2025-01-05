Feature: User create a book

    Scenario: User successfully create a book
        Given the API endpoint is ready 
        When the user sends a POST request to create a book
        Then the user response should contain the created book

    Scenario: User attempt to create a book without mandatory author field
        Given the API endpoint is ready
        When the user sends a POST request without title to create a book
        Then the user response should be bad request