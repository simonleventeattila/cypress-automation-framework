/// <reference types="Cypress" />
/// <reference types='@cypress/xpath' />

describe("Iterate over elements", () => {
  it("Log information of all haicare products", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      cy.log("index: " + index + " : " + $el.text())
  });
 
  
  })

  it("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/");

    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
      if($el.text().includes('Curls to straight Shampoo')) 
      {
        cy.wrap($el).click()
      }
  });
  });
});
