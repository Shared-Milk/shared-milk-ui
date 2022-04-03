describe('About page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  });

  it('should header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });

  it('should have an inspiration title, text, and quote', () => {
    cy.get('[data-testid=inspiration-title]').contains('Our Inspiration')
    cy.get('[data-testid=inspire-text]').contains('"No Use Cryin\' Over Shared Milk" was inspired by our founder, Seth Perna\'s, personal family battle with producing breast milk for his son and the mental an financial struggle that followed. Seth\'s mission became our mission...')
    cy.get('[data-testid=founder-quote]').contains('"to create a safe space for families who under-produce breast milk to connect with families who over-produce."')
  })

  it('should display our tech stack section and information', () => {
    cy.get('[data-testid=tech-stack-title]').should('be.visible')
    cy.get('[data-testid=tech-stack-content]').should('be.visible')
    cy.get('[data-testid=turing-link]').request('https://turing.edu/')
  })

  it('should display meet the team instructions', () => {
    cy.get('[data-testid=about-dev-instructions]').should('be.visible')
    cy.get('[data-testid=team-grid]').should('be.visible')
  })

  it('should have a place for dev name', () => {
    cy.get('[data-testid=dev-name]').should('have.length', 7)
    cy.get('[data-testid=dev-name]').first().contains('Seth Perna')
    cy.get('[data-testid=dev-name]').last().contains('Devon Wigle')
  })

  it('should have a place for dev image', () => {
    cy.get('[data-testid=dev-image]').should('have.length', 7)
  })

  it('should be able to be click image to visit a bio page', () => {
    cy.get('[data-testid=dev-image]').first().click().url().should('eq', 'http://localhost:3000/seth_perna')
  })

  it('should have a place for dev pronouns', () => {
    cy.get('[data-testid=dev-pronouns]').should('have.length', 7)
  })

  it('should have a place for dev social links', () => {
    cy.get('[data-testid=dev-social-links]').should('have.length', 7)
    cy.get('[data-testid=dev-linkedin-link]').should('be.visible')
    cy.get('[data-testid=dev-github-link]').should('be.visible')
  })
})