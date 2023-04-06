/// <reference types="Cypress" />
/// <reference types='@cypress/xpath' />


describe("Test Contact us form via Automation Test store", ()=>{
    it.only("Should be able to submit a successful submission via contact us form",()=>{
      cy.visit("https://automationteststore.com/", );
      //cy.get('.info_links_footer > :nth-child(5) > a').click();
      cy.xpath("//a[contains(@href, 'contact')]").click().then(function(linkText){
        cy.log(linkText.text());  
      });
      cy.get('#ContactUsFrm_first_name').type("Max Musterman");
      cy.get('#ContactUsFrm_email').type("asd@asd.com");
      cy.get('#ContactUsFrm_email').should("have.attr", "name", "email");
      cy.get('#ContactUsFrm_enquiry').type("What is life?");
      //cy.xpath("//button[title='Submit']").click();
      cy.get('button[title=Submit]').click();
      cy.get('.mb40 > :nth-child(3)').should('have.text',"Your enquiry has been successfully sent to the store owner!");
      console.log("Prints an async message");
      cy.log("Test has completed");
    });

    it("Should fail to submit a successful submission via contact us form due to incompleteness",()=>{
      cy.visit("https://automationteststore.com/", );
      cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
         
      cy.get('.col-md-6 > .btn').click();
     });

})
