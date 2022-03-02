
describe("App Tests", () => {
    
    beforeEach(() => {
        
        cy.visit("http://localhost:3000");
    })
    
    
    const usernameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosInput = () => cy.get('input[name=tos]')
    const submitButton = () => cy.get(`button[id="submitBtn"]`)

    it("User can type in input fields", () => {
        usernameInput()
            .should("exist")
            .should("have.value","");
        emailInput()
            .should('exist')
            .should("have.value","");
        passwordInput()
            .should("exist")
            .should("have.value","");
        tosInput()
            .should("exist");
        submitButton()
            .should("exist");
    })

})