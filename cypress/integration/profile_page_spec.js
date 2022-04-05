describe('individual about page flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/our-team/seth_perna')
  });

  it('should have a name as title', () => {
    cy.get('[data-testid=dev-page-title]').contains('Seth Perna')
  })

  it('should have a dev image', () => {
    cy.get('[data-testid=dev-page-photo]').should('be.visible')
  })

  it('should have a dev pronouns', () => {
    cy.get('[data-testid=dev-page-pronouns]').should('be.visible')
  })

  it('should have an about title', () => {
    cy.get('[data-testid=dev-page-about-title]').should('be.visible')
  })

  it('should have a linkedIn link', () => {
    cy.get('[data-testid=dev-page-linkedin-link]').should('be.visible')
  })

  it('should have a GitHub in link', () => {
    cy.get('[data-testid=dev-page-github-link]').should('be.visible')
  })
})