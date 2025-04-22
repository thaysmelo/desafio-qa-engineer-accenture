import practiceFormPage from '../pages/praticeFormPage';

describe('Submeter formulario', () => {


    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'));
        cy.clearCookies();  // Limpa cookies antes do teste
        cy.clearLocalStorage();
    });

    it('Submeter o Practice Form', () => {
        practiceFormPage.openPracticeForm();
        practiceFormPage.assertUrlPracticeForm('Practice Form', '/automation-practice-form');
        practiceFormPage.typeFirstName('Thays');
        practiceFormPage.typeLastName('Melo');
        practiceFormPage.typeEmail('thaysmelo@testes.com');
        practiceFormPage.selectGender('Female');
        practiceFormPage.typePhone('8194006677');
        practiceFormPage.selectDateOfBirth({ day: '23', month: 'January', year: '1992' });
        practiceFormPage.selectSubjects('Computer Science');
        practiceFormPage.selectHobbies('Reading');
        practiceFormPage.uploadPicture('../support/test.txt');
        practiceFormPage.typeAddress('Rua dos Testes, 000');
        practiceFormPage.selectState('Haryana');
        practiceFormPage.selectCity('Karnal');
        practiceFormPage.submitForm();
        practiceFormPage.assertModalIsVisible();
        practiceFormPage.closeModal();

    });
});