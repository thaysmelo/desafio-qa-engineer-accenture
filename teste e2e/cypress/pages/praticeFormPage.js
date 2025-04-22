class PracticeFormPage {
  elements = {
    firstName: () => cy.get('#firstName'),
    lastName: () => cy.get('#lastName'),
    email: () => cy.get('#userEmail'),
    gender: () => cy.get('.custom-control-label'),
    phone: () => cy.get('#userNumber'),
    dateOfBirth: () => cy.get('#dateOfBirthInput'),
    subjects: () => cy.get('#subjectsInput'),
    hobbies: () => cy.get('.custom-checkbox'),
    picture: () => cy.get('#uploadPicture'),
    address: () => cy.get('#currentAddress'),
    state: () => cy.get('#state'),
    city: () => cy.get('#city'),
    //submit: () => cy.get('#submit'),
    //modal: () => cy.get('.modal-content'),
    }

    openPracticeForm() {
        cy.visit('/automation-practice-form');
    }

    verificaUrlPracticeForm(title, url) {
        cy.contains(title,  { timeout: 10000 }).should('be.visible');
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
        cy.get('.react-datepicker__month-select').select(date.month);
        cy.get('.react-datepicker__year-select').select(date.year);
        cy.get(`.react-datepicker__day--0${date.day}`).click();
    }
    selectSubjects(subject) {
        this.elements.subjects().type(subject);
        cy.get('.subjects-auto-complete__menu-list').contains(subject).click();
    }
    selectHobbies(hobby) {
        this.elements.hobbies().contains(hobby).click();
    }
    uploadPicture(filePath) {
        this.elements.picture().attachFile(filePath);
    }
    selectState(state) {
        this.elements.state().click();
        cy.get('.css-1wa3eu0-placeholder').type(state);
        cy.get('.css-1wa3eu0-placeholder').contains(state).click();
    }
    selectCity(city) {
        this.elements.city().click();
        cy.get('.css-1wa3eu0-placeholder').type(city);
        cy.get('.css-1wa3eu0-placeholder').contains(city).click();
    }

}

export default new PracticeFormPage();