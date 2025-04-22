class BrowserWindowsPage {

    goToBrowserWindowsByUrl() {
        cy.visit('/browser-windows');
    }

    goToBrowserWindowsByClick() {
        cy.get('.category-cards > :nth-child(3)').click();
    }

    clickBrowserWindows() {
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click();
    }

    verifyNewWindowButtonIsVisible() {
        cy.get('#windowButton').should('be.visible');
    }

    openNewWindow() {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.get('#windowButton').click();
    }

    verifyNewWindowContent(message) {
        
    }
}

export default new BrowserWindowsPage();