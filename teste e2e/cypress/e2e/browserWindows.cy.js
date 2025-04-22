import browserWindowsPage from "../pages/browserWindowsPage";

describe('Testes relacionados a janela do menu browser', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Testar abrir uma nova janela no browser windows', () => {
        browserWindowsPage.goToBrowserWindowsByClick();
        browserWindowsPage.clickBrowserWindows();
       
    });
});