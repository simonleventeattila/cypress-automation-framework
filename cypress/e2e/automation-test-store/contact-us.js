/// <reference types="Cypress" />
/// <reference types='@cypress/xpath' />


describe("Test Contact us form via Automation Test store", ()=>{
    it("Should be able to submit a successful submission via contact us form",()=>{
      cy.visit("https://automationteststore.com/", );
      //  cy.get('.info_links_footer > :nth-child(5) > a').click();
      cy.xpath("//a[contains(@href, 'contact')]").click();
      cy.get('#ContactUsFrm_first_name').type("Max Musterman");
      cy.get('#ContactUsFrm_email').type("asd@asd.com");
      cy.get('#ContactUsFrm_enquiry').type("What is life?");
      cy.get('.col-md-6 > .btn').click();
    });

    it("Should fail to submit a successful submission via contact us form due to incompletness",()=>{
      cy.visit("https://automationteststore.com/", );
      cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
         
      cy.get('.col-md-6 > .btn').click();
     });

})
