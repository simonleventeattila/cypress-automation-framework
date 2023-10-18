/// <reference types="Cypress" />
/// <reference types='@cypress/xpath' />


describe("Verifying variables, cypress commands and jquery commands", ()=>{
    it.only("Click on product/category",()=>{
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Makeup").click();
     //Following commnad will fail
     const header = cy.get("h1 .maintext");
     cy.log(header);

    //  cy.get("h1 .maintext").then(($headerText)=> {
    //     const headerText = $headerText.text()
    //     cy.log("found header text:" + headerText)
    //  })
    });
   
    it("Click on the first item using item header",()=>{
      cy.visit("https://automationteststore.com/");
      cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
    });
 

    

    

})
