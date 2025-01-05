Feature: Document functionality

    Scenario: User create a document type 
        Given the user is on document page 
        When the user create a document type 
        Then new document type will be shown in table 
        
    Scenario: User edit a document type 
        Given the user is on document page 
        When the user edit a document type 
        Then it will be shown in table

    Scenario: User delete a document type
        Given the user is on document page
        When the user delete a document type
        Then it will be not shown in table