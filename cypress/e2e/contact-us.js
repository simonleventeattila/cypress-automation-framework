/// <reference types="Cypress" />

describe("Test Contact us form via Webdriveruni", ()=>{
    it("Should be able to submitt a succseful submission via contact us form",()=>{
        //code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get('[name="first_name"]').type("Theodora");
        cy.get('[name="last_name"]').type("Mathe");
        cy.get('[name="email"]').type("teodora@gmail.com");
        cy.get('textarea.feedback-input').type("Whatevere comment");
        cy.get('[type="submit"]').click();

    it.only("Should not be able to submitt a succseful submission via contact us form as all fields are required",()=>{
    });
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Theodora");
    cy.get('[name="last_name"]').type("Mathe");
    cy.get('[type="submit"]').click();
    });
});

