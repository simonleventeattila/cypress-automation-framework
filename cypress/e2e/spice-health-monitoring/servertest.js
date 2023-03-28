/// <reference types="Cypress" />

describe("Check that services are running in PROD", ()=>{
    it.only("Check that QCS is up and running",()=>{
        //code
        cy.visit("https://mall.industry.siemens.com/spice/quotecreation-service/servertest");
        cy.contains("succeeded");

    });

    it("Check that QLM is up and running",()=>{
        //code
        cy.visit("https://mall.industry.siemens.com/spice/qlm-service/servertest");
        cy.contains("succeeded");
    });

    it("Check that IQ is up and running",()=>{
        //code
        cy.visit("https://mall.industry.siemens.com/spice/csk/servertest");
        cy.contains("succeeded");
    });

});

