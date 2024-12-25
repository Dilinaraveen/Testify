import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';


const DASHBOARD_NAVIGATION_BAR = '#admin_Admin > :nth-child(1) > a'; 
const MANAGE_MAIN_MENU = '.treeview:nth-child(3) > a[href="#"]'; 
const LEAVE_SUB_MENU_ITEM = '.treeview-menu > li:nth-child(4) a[href*="n=leaves&m=admin_Manage"]'; 
const LEAVE_TYPE_TABLE = '#LeaveTypeTable';
const TAB_CONTAINER = '#modTab'; 
const LEAVE_TYPE_TAB = '#tabLeaveType';


// Given the user is logged in and on the dashboard
Given('the user is logged in and on the dashboard', () => {
  cy.visit(Cypress.env('BASE_URL'));
  cy.get(DASHBOARD_NAVIGATION_BAR).should('contain', 'Dashboard');
});

//When the user navigates to Manage > Leave
When('the user navigates to Manage > Leave', () => {

  cy.get(MANAGE_MAIN_MENU).click(); 

  cy.get('.treeview-menu').should('be.visible');
  
  cy.get(LEAVE_SUB_MENU_ITEM).click();
});

// Then the user should see the Leave Types tab and the table
Then('the user should see the Leave Types tab and the table', () => {
    
    cy.url().should('include', 'g=admin&n=leaves&m=admin_Manage');
  
    cy.get(TAB_CONTAINER) 
    .find('li.active') 
    .within(() => {
      cy.get(LEAVE_TYPE_TAB) 
        .should('be.visible') 
        .and('contain.text', 'Leave Types');
    });

    cy.get('.ant-btn-primary')
    .should('be.visible')
    .and('contain', 'Add New'); 


    cy.get('.ant-btn-default')
    .should('be.visible')
    .and('contain', 'Filters'); 

  
    cy.get('#advanced_search')
    .should('be.visible'); 


    cy.get('#advanced_search_searchTerm')
    .should('be.visible') 
    .and('have.attr', 'placeholder', 'input search text'); 


    cy.get('#advanced_search .ant-input-search-button')
    .should('be.visible') 
    .and('contain', 'Search'); 

    cy.get(LEAVE_TYPE_TABLE).should('exist');
  });

