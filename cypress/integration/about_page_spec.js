describe('About page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  });

  it('should header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });
  
})