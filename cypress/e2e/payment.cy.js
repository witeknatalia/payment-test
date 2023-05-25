describe('Test failed payment flow', () => {
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
    cy.get('[data-test="accept-cookies-button"]')
      .click();
    cy.get('[data-test="auth-login-submit"]')
      .click();
    cy.url({ timeout: 10000 })
      .should('include', '/dashboard/main');
    cy.contains('CV - TEST')
      .should('exist', { timeout: 10000 });
    cy.get('button')
      .contains('Pobierz CV')
      .click();
    cy.url()
      .should('include', '/cart/pricing');
    cy.get('[data-test="cart-plan-continue"]')
      .should('be.visible')
      .click();
    cy.getIframe('#ccNum', '4000 000 000 0051');
    cy.getIframe('#ccCVV', '123');
    cy.findByPlaceholderText('MM/YY').type('10/23');
    cy.findByPlaceholderText('Jan Kowalski').clear().type('Vincent Testowy');
    cy.get('[data-test="cart-pay-securely"]').click();
    cy.url()
      .should('include', '/cart/error', { timeout: 20000 });
    cy.contains('Coś poszło nie tak z Twoją płatnością')
      .should('be.visible');
  })
})
