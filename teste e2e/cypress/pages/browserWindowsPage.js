class BrowserWindowsPage {
    elements = {
        accessBrowserWindowsMenu: () => cy.get('.category-cards > :nth-child(3)'),
        buttonBrowserWindows: () => cy.get(':nth-child(3) > .element-list > .menu-list > #item-0'),
        newWindowButton: () => cy.get('#windowButton'),
        newWindow: () => cy.get('#window'),
    }

    goToBrowserWindowsByUrl() {
        cy.visit('/browser-windows');
    }

    goToBrowserWindowsByClick() {
        this.elements.accessBrowserWindowsMenu().click();
    }

    clickBrowserWindows() {
        this.elements.buttonBrowserWindows().click();
    }

    assertNewWindowButtonIsVisible() {
        this.elements.newWindowButton().should('be.visible');
    }

    openNewWindow() {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.get('#windowButton').click();
    }

    assertNewWindowContent(message) {
        cy.get('@windowOpen').then((stub) => {
            const url = stub.getCall(0).args[0]; // agora sim!
            expect(url).to.contain('/sample');
            cy.visit(url); // visita a nova janela no mesmo contexto
            cy.contains(message).should('be.visible');
        });
    }

    closeNewWindow() {
        cy.go('back');
    }
}

export default new BrowserWindowsPage();