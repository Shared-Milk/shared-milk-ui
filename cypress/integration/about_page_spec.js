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
})