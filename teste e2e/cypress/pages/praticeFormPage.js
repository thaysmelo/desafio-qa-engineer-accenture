class PracticeFormPage {
    elements = {
        formButton: () => cy.get('.card-body').contains('Form'),
        practiceFormButton: () => cy.get(':nth-child(2) > .element-list > .menu-list > #item-0'),
        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        email: () => cy.get('#userEmail'),
        gender: () => cy.get('.custom-control-label'),
        phone: () => cy.get('#userNumber'),
        dateOfBirth: () => cy.get('#dateOfBirthInput'),
        dateOfMoth: () => cy.get('.react-datepicker__month-select'),
        dateOfYear: () => cy.get('.react-datepicker__year-select'),
        subjects: () => cy.get('#subjectsInput'),
        subjectsContainerAutoComplete: () => cy.get('.subjects-auto-complete__menu'),
        subjectsContainer: () => cy.get('.subjects-auto-complete__option'),
        hobbies: () => cy.get('.custom-checkbox'),
        picture: () => cy.get('#uploadPicture'),
        address: () => cy.get('#currentAddress'),
        state: () => cy.get('#state'),
        city: () => cy.get('#city'),
        submit: () => cy.get('#submit'),
        modal: () => cy.get('.modal-content'),
        closeModal: () => cy.get('#closeLargeModal'),
    }

    openPracticeForm() {
        this.elements.formButton().should('be.visible').click();
        this.elements.practiceFormButton().should('be.visible').click();
        cy.url().should('include', '/automation-practice-form');

    }

    assertUrlPracticeForm(title, url) {
        cy.contains(title, { timeout: 10000 }).should('be.visible');
        cy.url().should('include', url);
    }

    typeFirstName(firstName) {
        this.elements.firstName().should('be.visible').type(firstName);
    }
    typeLastName(lastName) {
        this.elements.lastName().should('be.visible').type(lastName);
    }
    typeEmail(email) {
        this.elements.email().should('be.visible').type(email);
    }
    typePhone(phone) {
        this.elements.phone().should('be.visible').type(phone);
    }
    typeAddress(address) {
        this.elements.address().should('be.visible').type(address);
    }
    selectGender(gender) {
        this.elements.gender().contains(gender).click();
    }
    selectDateOfBirth(date) {
        this.elements.dateOfBirth().click();
        this.elements.dateOfMoth().select(date.month);
        this.elements.dateOfYear().select(date.year);
        cy.get(`.react-datepicker__day--0${date.day}`).click();
    }
    selectSubjects(subject) {
        this.elements.subjects().type(subject);
        this.elements.subjectsContainerAutoComplete().should('be.visible');
        this.elements.subjectsContainer().contains(subject).click();
    }
    selectHobbies(hobby) {
        this.elements.hobbies().contains(hobby).click();
    }
    uploadPicture(filePath) {
        this.elements.picture().attachFile(filePath);
    }
    selectState(state) {
        this.elements.state().click();
        cy.contains('.css-26l3qy-menu div', state).click();
    }
    selectCity(city) {
        this.elements.city().click();
        cy.contains('.css-26l3qy-menu div', city).click();
    }

    submitForm() {
        this.elements.submit().click();
    }

    assertModalIsVisible() {
        this.elements.modal().should('be.visible');
    }

    closeModal() {
        this.elements.closeModal().click();
        this.elements.modal().should('not.exist');
    }

}

export default new PracticeFormPage();