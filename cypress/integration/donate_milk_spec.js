describe('Shared Milk landing page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/donate')
  });

  it('should have a form', () => {
    cy.get('[data-testid=donate-form]').should('be.visible')
  })
});