/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />



describe("Test Contact Us form via Automation Test Store", () => {
  it.only("Should be able to submit a successful submission via contact us form", () => {
    //cypress code
    cy.visit("https://automationteststore.com/");
    //cy.get('.info_links_footer > :nth-child(5) > a').click()
    cy.get("a[href$='contact']").click().then(function(linkText){
      cy.log("Clicked on link using text : " + linkText.text())
    });
    //cy.xpath("//a[contains(@href,'contact')]").click();
    cy.get("#ContactUsFrm_first_name").type("Joe");
    cy.get("#ContactUsFrm_email").type("joejoejoe@gmail.cum");
    cy.get("#ContactUsFrm_email").should('have.attr','name','email');
    cy.get("#ContactUsFrm_enquiry").type("Dicoba-coba dulu yaaa!");
    //cy.get("button[title='Submit']").click()
    cy.get("button[title='Submit']").click();
    //validasi
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    
  });
});
