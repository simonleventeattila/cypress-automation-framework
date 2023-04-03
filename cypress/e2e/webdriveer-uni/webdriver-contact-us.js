/// <reference types="Cypress" />

describe("Test Contact us form via Web-driver-uni", ()=>{
    it("Should be able to submit a successful submission via contact us form",()=>{
        //code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html", );
        cy.document().should('have.a.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include','WebDriver | Contact Us');
        cy.url().should('include','contactus.html');
        cy.get('[name="first_name"]').type("Theodora");
        cy.get('[name="last_name"]').type("Mathe");
        cy.get('[name="email"]').type("teodora@gmail.com");
        cy.get('textarea.feedback-input').type("Whatever comment");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');

    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required",()=>{
 
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Theodora");
    cy.get('[name="last_name"]').type("Mathe");
    cy.get('textarea.feedback-input').type("How can I learn Cypres?")
    cy.get('[type="submit"]').click();
    cy.get('body').contains("Error: all fields are requi");
    });
});

