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
    cy.get('form')
      .get('.main-container')
      .get('form')
    cy.get('.name')
      .type('Joan Russell')
      .should('have.value', 'Joan Russell')
      cy.get('.email')
      .type('j_russell@gmail.com')
      .should('have.value', 'j_russell@gmail.com')
      cy.get('.tel')
      .type('310-810-1022')
      .should('have.value', '310-810-1022')
    cy.get('textarea')
      .type('I love releasing milk and sharing it with babies around the world')
      .should('have.value', 'I love releasing milk and sharing it with babies around the world')
    cy.get('.button').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/sent-confirmation')
    }));
  })

  it('should display a confirmation message once user clicks submit on milk request form', () => {
    cy.visit('http://localhost:3000/sent-confirmation')
    cy.get('h2').contains('Message Sent')
      .get('p').contains('Thank you for contacting a donor. Keep an eye on your email or phone for a response from them.')
      .get('p').contains('Best wishes!')

  })

})
