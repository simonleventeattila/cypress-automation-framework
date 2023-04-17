/// <reference types="Cypress" />

describe("Test Contact us form via Web-driver-uni", ()=>{
    it("Test product upload",()=>{
        cy.visit('http://robavk238srv.bav.cvclab.lan:43916/csk/pages/uuid/3CE1AEDB-7291-4763-9A66-6DA8AFE5A7F9');
        cy.get('h2').click();
        cy.get('#regionSelectionBtn > .button-label').click();
        cy.get('#searchRC').click();
        cy.get('#searchRC').type('it');
        cy.get('.hovered-dropdown-item').click();
        cy.get('#newServiceOrderBtn > .button-label').click();
        cy.get('#stepOffering .button-label').click();
        cy.get('#basket-rows').click();
        cy.get('#offeringProductsTab-link > .tab-header-container').click();
        cy.get('#productListExcelUpload > .button-label').click();
        cy.get('input').type('C:\fakepath\TW_50-Items_5.7.2-3x.xlsx');
        cy.get('.more-actions').click();
        cy.get('#position_row_140_col_0 > .csk-basket-text-cell-container').dblclick();
        cy.get('#position_row_140_col_0 > .csk-basket-text-cell-container').click();
           

    });

    
});

