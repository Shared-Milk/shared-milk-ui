describe('Header content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should display page title and navigation links on page load', () => {
    cy.get('[data-testid=site-title]').contains('No Use Cryin\' Over Shared Milk')
    cy.get('[data-testid=nav-bar]').contains('Home')
    cy.get('[data-testid=nav-bar]').contains('Need Milk')
    cy.get('[data-testid=nav-bar]').contains('Donate')
    cy.get('[data-testid=nav-bar]').contains('About')
    cy.get('[data-testid=nav-bar]').contains('Support')
  });
})

describe('footer content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should have a copyright line', () => {
    cy.get('[data-testid=copyright-line]').should('be.visible')
  });
})