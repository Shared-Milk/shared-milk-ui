describe('About page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  });

  it('Should display a header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });

  it('Should display a page with 5 elements', () => {
    cy.get('[data-testid=about]').should('be.visible').children().should('have.length', 5)
  });

  it('The first two elements should be a page title and overview', () => {
    cy.get('[data-testid=about] > h2:nth-child(1)').contains('Our Inspiration')
      .get('[data-testid=about] > p:nth-child(2)').should('have.length', 1)
  });

  it('The third element should be a mission quote with a horizontal rule divider', () => {
    cy.get('[data-testid=about]').children()
      .get('.mission-container').should('be.visible')
      .get('p').should('have.class', 'mission').contains('to create a safe space for families who underproduce breast milk to connect with families who overproduce.')
      .get('.dots')
  });

  it('Should display a grid of baby photos', () => {
    cy.get('[data-testid=team-grid]').should('be.visible').children()
      .get('[data-testid=member-card]').children()
      .get('.baby-photo > .baby-photo')
  });
});