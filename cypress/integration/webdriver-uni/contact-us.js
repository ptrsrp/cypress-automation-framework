/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    it.only("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get('#contact-us > .thumbnail > .section-title > h1').click()
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        cy.get('[name="first_name"]').type("Joe");
        cy.get('[name="last_name"]').type("Aja");
        cy.get('[name="email"]').type("JoeAja@emailaja.com");
        cy.get('[name="message"]').type("Kita Coba Coba");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text','Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        //cy.get('#contact-us > .thumbnail > .section-title > h1').click()
        cy.get('[name="first_name"]').type("Ju");
        cy.get('[name="last_name"]').type("Ajah");
        //cy.get('[name="email"]').type("JoeAja@emailaja.com");
        cy.get('[name="message"]').type("Kita Coba Coba");
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')
    });
})
