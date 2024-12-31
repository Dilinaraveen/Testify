Feature: Invalid Saving of Loan Type Form
    Scenario: Save loan type with missing required field
        Given the user is on the Add New Loan Type form page
        When the user clicks the Add New Button
        When the user leaves the Name field empty
        And clicks the Save button
        Then the user should see the Name field change color to red