describe('need milk donor results page user flow', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://secret-forest-87730.herokuapp.com/graphql', (req) => {
      req.reply({
        statusCode: 200,
        fixture: 'donorMoms.json'
      })
    })

    cy.visit('http://localhost:3000/need-milk')
  })

  it('should have a donor results container that displays three donors', () => {
    cy.get('.main-container').should('exist')
      .get('.contact-grid')
      .get('a.contact-card').should('have.length', 3)
  })

  it('should display donor information on each donor card', () => {
    cy.get('a.contact-card').first()
      .get('h3').contains('Stacey Berkowitz')
      .get('p').contains('Location: Denver, CO')
      .get('h4').contains('Bio')
      .get('p').contains('I want to help struggling mothers and hungry babies')
  })

  it('should allow user to click on donor that they want to contact', () => {
    cy.get('a.contact-card').first().click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/contact')
    }));
    cy.get('h2').contains('Connect with Stacey Berkowitz')
  })
})