describe('Need Milk request user flow', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://secret-forest-87730.herokuapp.com/graphql', (req) => {
      req.reply({
        statusCode: 200,
        fixture: 'donorMoms.json'
      })
    })

    cy.visit('http://localhost:3000/need-milk')
  });

  it('Should display a header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });

  it('Should display a page with 3 elements', () => {
    cy.get('[data-testid=donors]').should('be.visible').children().should('have.length', 3)
  });

  it('The first two elements should be a page title and instructions', () => {
    cy.get('[data-testid=donors] > h2:nth-child(1)').contains('Milk Donors')
      .get('[data-testid=donors] > p:nth-child(2)').should('have.length', 1)
  });

  it('Should have a donor results container that displays three donors', () => {
    cy.get('[data-testid=donors]').should('exist').children()
      .get('[data-testid=contact-card]').should('have.length', 3)
  });
 
  it('Should display a donor name, location, and a bio on each card', () => {
    cy.get('[data-testid=contact-card]').first()
      .get('[data-testid=donor-name]').contains('Stacey Berkowitz')
      .get('[data-testid=donor-location]').contains('Location: Denver, CO')
      .get('[data-testid=bio-title]').contains('Bio')
      .get('[data-testid=donor-bio]').contains('I want to help struggling mothers and hungry babies')
  });

  it('Should allow user to click on donor that they want to contact, display a contact form and allow the user to send a message via that form', () => {
    cy.get('[data-testid=contact-card]').first().click()
      .location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/contact')
    }))
      .get('[data-testid=request-container]').children()
      .get('h2:nth-child(1)').should('be.visible').contains('Connect with Stacey Berkowitz')
    cy.get('[data-testid=request-form]').children()
    cy.get('[for="First & Last Name"]').should('be.visible').contains('Your Name')
      .get('[name="recipientName"]')
      .type('Joan Russell')
      .should('have.value', 'Joan Russell')
    cy.get('[for="Email Address"]').should('be.visible').contains('Email Address')
      .get('[name="recipientEmail"]')
      .type('j_russell@gmail.com')
      .should('have.value', 'j_russell@gmail.com')
    cy.get('[for="Phone Number"]').should('be.visible').contains('Phone Number')
      .get('[name="recipientPhone"]')
      .type('3108101022')
      .should('have.value', '3108101022')
    cy.get('[for="Message"]').should('be.visible').contains('Message')
      .get('[name="recipientMessage"]')
      .type('I need extra milk to feed my growing boy, Teddy')
      .should('have.value', 'I need extra milk to feed my growing boy, Teddy')
    cy.get('[data-testid=request-button]').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/sent-confirmation')
    }));
  });

  it('Should display a confirmation message after a user has submitted a milk request.', () => {
    cy.visit('http://localhost:3000/sent-confirmation')
    cy.get('[data-testid=confirmation-message] > h2:nth-child(1)').contains('Message Sent')
      .get('[data-testid=confirmation-message] > p:nth-child(2)').contains('Thank you')
      .get('[data-testid=confirmation-message] > p:nth-child(3)').contains('Best wishes!')
  });

  it('should not let a user connect with a donor if they leave an input field empty', () => {
    cy.get('[data-testid=contact-card]').first().click()
    cy.get('[name="recipientName"]')
      .type('Joan Russell')
      .should('have.value', 'Joan Russell')
    cy.get('[data-testid=request-button]').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/contact')
    }));
  });
});
