import browserWindowsPage from "../pages/browserWindowsPage";

describe('Testes relacionados a janela do menu browser', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Teste para abrir uma nova janela no browser windows', () => {
        browserWindowsPage.goToBrowserWindowsByClick();
        browserWindowsPage.clickBrowserWindows();
        browserWindowsPage.assertNewWindowButtonIsVisible();

        browserWindowsPage.openNewWindow();
        browserWindowsPage.assertNewWindowContent('This is a sample page');
        browserWindowsPage.closeNewWindow();        
    });
});