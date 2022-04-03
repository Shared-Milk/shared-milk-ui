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
    cy.get('[data-testid=main-container]').should('exist')
      .get('[data-testid=contact-grid]')
      .get('[data-testid=contact-card]').should('have.length', 3)
  })
 
  it('should display donor information on each donor card', () => {
    cy.get('[data-testid=contact-card]').first()
      .get('[data-testid=donor-name]').contains('Stacey Berkowitz')
      .get('[data-testid=donor-location]').contains('Location: Denver, CO')
      .get('[data-testid=bio-title]').contains('Bio')
      .get('[data-testid=donor-bio]').contains('I want to help struggling mothers and hungry babies')
  })

  it('should allow user to click on donor that they want to contact', () => {
    cy.get('[data-testid=contact-card]').first().click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/contact')
    }));
    cy.get('[data-testid=request-container]')
    cy.get('[data-testid=donor-connect]').contains('Connect with Stacey Berkowitz')
    cy.get('[data-testid=request-form]')
    cy.get('[data-testid=request-name]')
      .type('Joan Russell')
      .should('have.value', 'Joan Russell')
      cy.get('[data-testid=request-email]')
      .type('j_russell@gmail.com')
      .should('have.value', 'j_russell@gmail.com')
      cy.get('[data-testid=request-tel]')
      .type('3108101022')
      .should('have.value', '3108101022')
    cy.get('[data-testid=request-bio]')
      .type('I need extra milk to feed my growing boy, Teddy')
      .should('have.value', 'I need extra milk to feed my growing boy, Teddy')
    cy.get('[data-testid=request-button]').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/sent-confirmation')
    }));
  })

  it('should display a confirmation message once user clicks submit on milk request form', () => {
    cy.visit('http://localhost:3000/sent-confirmation')
    cy.get('[data-testid=confirmation]').contains('Message Sent')
      .get('[data-testid=confirmation-msg]').contains('Thank you for contacting a donor. Keep an eye on your email or phone for a response from them.')
      .get('[data-testid=confirmation-wishes]').contains('Best wishes!')
  })

  it('should not let a user connect with a donor if they leave an input field empty', () => {
    cy.get('[data-testid=contact-card]').first().click()
    cy.get('[data-testid=request-name]')
      .type('Joan Russell')
      .should('have.value', 'Joan Russell')
    cy.get('[data-testid=request-button]').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/contact')
    }));
  })

})
