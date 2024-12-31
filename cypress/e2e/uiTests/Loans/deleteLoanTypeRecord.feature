Feature: Delete Loan Type Record
    Scenario: Successfully delete a loan type record
        Given the user is on the Add New Loan Type page
        When the user clicks the delete button for a loan type record "Personal loan"
        And the delete confirmation popup is displayed
        And the user clicks the Delete button
        Then the loan type record "Personal loan" should no longer exist
