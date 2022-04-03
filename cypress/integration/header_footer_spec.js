describe('Header content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should have header parts', () => {
    cy.get('[data-testid=site-title]').contains('No Use Cryin\' Over Shared Milk')
    cy.get('[data-testid=nav-bar]').contains('Home')
    cy.get('[data-testid=nav-bar]').contains('Need Milk')
    cy.get('[data-testid=nav-bar]').contains('Donate')
    cy.get('[data-testid=nav-bar]').contains('About')
    cy.get('[data-testid=nav-bar]').contains('Support')
  });

  it('should have a footer', () => {
    cy.get('[data-testid=copyright-line]').should('be.visible')
  });
})