/// <reference types="Cypress" />
/// <reference types='@cypress/xpath' />


describe("Verifying variables, cypress commands and jquery commands", ()=>{
    it("Click on the first item using item header",()=>{
      cy.visit("https://automationteststore.com/");
      cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });

    

    

})
