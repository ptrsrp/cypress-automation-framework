/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Inspect Automation Test Store Items using chain commands", () => {
    it("Click on the first item using item header", () => {
      cy.visit("https://automationteststore.com/");
      cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
    });
    it("Click on the first item using item text", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.prdocutname').contains("Skinsheen Bronzer Stick").click().then(function(itemHeaderText){
          console.log("Selected the following item " + itemHeaderText.text())
        })
        console.log("123testtttttt")
        // cy.get('.bgnone').should('have.text','Skinsheen Bronzer Stick')
      });
    it("Click on the first item using index", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(1).click()
      });
  });
  