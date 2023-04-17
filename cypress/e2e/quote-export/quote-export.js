/// <reference types="Cypress" />

describe("Test Contact us form via Web-driver-uni", ()=>{
    it("Should be able to submit a successful submission via contact us form",()=>{
        //code
        cy.visit("http://robavk238srv.bav.cvclab.lan:43916/csk/pages/uuid/3CE1AEDB-7291-4763-9A66-6DA8AFE5A7F9", );
        cy.get('#regionSelectionBtn > .button-label').click();
        cy.get('#searchRC').click().type("IT");
        cy.get(':nth-child(1) > .rc-dropdown-item').click();
        cy.get('#mat-input-0').click().type("asd").clear();
        cy.get('.mat-select-value-text > .ng-tns-c67-2').click();
        cy.get('#mat-option-32 > .mat-option-text').click();

        // cy.get('#mat-option-29 > .mat-pseudo-checkbox').click().clear();
        // //cy.get('.mat-select-value-text > .ng-tns-c67-2').click();
        // cy.get('#mat-option-29 > .mat-pseudo-checkbox').click();
        




        // cy.document().should('have.a.property', 'charset').and('eq', 'UTF-8');
        // cy.title().should('include','WebDriver | Contact Us');
        // cy.url().should('include','contactus.html');
        // cy.get('[name="first_name"]').type("Theodora");
        // cy.get('[name="last_name"]').type("Mathe");
        // cy.get('[name="email"]').type("teodora@gmail.com");
        // cy.get('textarea.feedback-input').type("Whatever comment");
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', 'Thank You for your Message!');

    });

    
});

