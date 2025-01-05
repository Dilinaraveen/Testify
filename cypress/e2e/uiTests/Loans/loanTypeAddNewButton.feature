Feature: Validation of 'Add New' Button on Loan Type Page
    Scenario: User clicks the 'Add New' button
        Given the user is on the Loan page
        When the user clicks the Add New Button
        Then the user should be navigated to Add New Loan form page