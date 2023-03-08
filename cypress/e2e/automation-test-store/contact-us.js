/// <reference types="Cypress" />

describe("Test Contact us form via Automation Test store", ()=>{
    it("Should be able to submit a successful submission via contact us form",()=>{
       //code
        cy.visit("https://automationteststore.com/", );
        cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type("Max Musterman");
        cy.get('#ContactUsFrm_email').type("asd@asd.com");
        cy.get('#ContactUsFrm_enquiry').type("What is life?");
        cy.get('.col-md-6 > .btn').click();
    });

    it.only("Should be able to submit a successful submission via contact us form",()=>{
        //code
         cy.visit("https://automationteststore.com/", );
         cy.get('.info_links_footer > :nth-child(5) > a').click();
         
         cy.get('.col-md-6 > .btn').click();
     });

})
