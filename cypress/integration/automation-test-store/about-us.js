/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />



describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
      //cypress code
      cy.visit("https://automationteststore.com/");
      //cy.get('.info_links_footer > :nth-child(5) > a').click()
      cy.xpath('//a[@href ="https://automationteststore.com/index.php?rt=content/content&content_id=1"]').click()
  });
})
