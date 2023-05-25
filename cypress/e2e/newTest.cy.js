describe('New test', () => {
    beforeEach(() => {
        cy.visit('/login')
    });
    it('passes', () => {
        cy.get('[data-test="auth-login-email"]', { timeout: 10000 })
            .should('be.visible')
            .type(Cypress.env('user_name'), {
                log: false
            });
        cy.get('[data-test="auth-login-password"]')
            .should('exist')
            .type(Cypress.env('user_password'), {
                log: false
            });
    })
})
