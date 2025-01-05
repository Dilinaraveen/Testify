Feature: Update a Book

    Scenario: Successfully update a book with Admin login
        Given the API endpoint is ready
        When the Admin sends a PUT request to update a book
        Then the response should contain the updated book details

    Scenario: Attempt to update a non-existent book
        Given the API endpoint is ready
        When the Admin sends a PUT request to update a non-existent book
        Then the response should indicate the book does not exist

    Scenario: Attempt to update a book with an existing name but different ID and author
        Given the Admin is logged in and the API endpoint is ready
        When the Admin sends a PUT request to update a book with existing book name
        Then the response status code should be 200
        And the response should contain the updated book details

    Scenario: User attempts to update a book with User login
        Given the User is logged in and the API endpoint is ready
        When the User sends a PUT request to update a book
        Then the response status should be 403
        And the response message should be User is not permitted.

    Scenario: Admin attempts to update a book with an empty title
        Given the Admin is logged in and the API endpoint is ready
        When the Admin sends a PUT request to update a book with an empty title
        Then the response status code should be 400
        And the response message should indicate that Mandatory parameters should not be null

