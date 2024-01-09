/// <reference types="Cypress" />

describe('Selector Example', () => {
    it('Examples of Selector via WebdriverUni Contact Us Page', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        
        //by tag name
        cy.get("input")

        //by attribute name and value
        cy.get("input[name = 'first_name']")

        //by id
        cy.get("#contact_me")

        //by class
        cy.get(".contact_button")

        //by multiple class
        cy.get("[class = 'navbar navbar-inverse navbar-fixed-top']")

        //by two different attribute
        cy.get("[name = 'last_name'][placeholder = 'Last Name']")

        //by xpath
        cy.xpath("//input[@name= 'email']")
    });
});