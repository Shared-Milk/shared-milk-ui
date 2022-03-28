describe('Support page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/support')
  });

  it('should display page title and navigation links on page load', () => {
    cy.get('h1').contains('No Use Cryin\' Over Shared Milk')
    cy.get('.nav').contains('Home')
    cy.get('.nav').contains('Need Milk')
    cy.get('.nav').contains('Donate')
    cy.get('.nav').contains('About Us')
    cy.get('.nav').contains('Support')
  });