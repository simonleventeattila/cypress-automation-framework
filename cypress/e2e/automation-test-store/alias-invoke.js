/// <reference types="Cypress" />
/// <reference types='@cypress/xpath' />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
      cy.visit("https://automationteststore.com/");
  
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
    cy.get('@productThumbnail').its('length').should('be.gt', 5)
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    
    });

    it("Challenge:1. Check that there are 16 products. 2. Check that cart icon has title 'Add to Cart'." , () => {
      cy.visit("https://automationteststore.com/");
      
      cy.get('.thumbnail').as('productThumbnail')
      cy.get('@productThumbnail').should('have.length', 16);
      
      cy.get('.productcart').eq(0).invoke('attr', 'title').as('CartTitle');
      cy.get('@CartTitle').should('include', 'Add to Cart')
    })
    
    it.only("COURSE SOLUTION: t'." , () => {
      cy.visit("https://automationteststore.com/");
      
      cy.get('.thumbnail').as('productThumbnail')
      cy.get('@productThumbnail').should('have.length', 16);
      
      cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
      
    })

  });
  