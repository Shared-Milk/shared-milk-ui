describe('Donate milk form user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/donate')
  });

  it('Should display a header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });

  it('Should display a page with 8 elements', () => {
    cy.get('[data-testid=donate]').should('be.visible').children().should('have.length', 8)
  });

  it('The first two elements should be a page title, a message about why to donate, an overview about donating, and a thank you message.', () => {
    cy.get('[data-testid=donate] > h2:nth-child(1)').contains('Donate Milk')
      .get('[data-testid=donate] > p:nth-child(2)').should('have.length', 1).contains('Why Donate?')
      .get('[data-testid=donate] > p:nth-child(4)').should('have.length', 1).contains('Your donations')
      .get('[data-testid=donate] > p:nth-child(6)').should('have.length', 1).contains('Ready to Donate?')
  });

  it('Should display a donation form', () => {
    cy.get('[data-testid=donor-form]').children()
    cy.get('[for="Your Name"]').should('be.visible').contains('Your Name');
    cy.get('[name=donorName]')
    cy.get('[for="Email Address"]').should('be.visible').contains('Email Address');
    cy.get('[name=donorEmail]')
    cy.get('[for="Phone Number"]').should('be.visible').contains('Phone Number');
    cy.get('[name=donorPhone]')
    cy.get('[for="Location"]').should('be.visible').contains('Location');
    cy.get('[name=donorLocation]')
    cy.get('[data-testid=smoker-question]').should('be.visible').contains('Have you used any tobacco products in the last 6 weeks?');
    cy.get('[for="no"]').should('be.visible').contains('NO');
    cy.get('[for="yes"]').should('be.visible').contains('YES');
    cy.get('[for="message"]').should('be.visible').contains('Message');
    cy.get('[data-testid=donate-submit-button]').should('be.visible')
  })

  it('Should be able to fill in the form and get a sorry message when yes to smoking is selected', () => {
    cy.get('[data-testid=donor-form]').children()
    cy.get('[name=donorName]')
      .click()
      .type('Jane Doe')
      .should('have.value', 'Jane Doe')
    cy.get('[name=donorEmail]')
      .click()
      .type('janedoe@example.com')
      .should('have.value', 'janedoe@example.com')
    cy.get('[name=donorPhone]')
      .click()
      .type('(555) 555-5555')
      .should('have.value', '5555555555')
    cy.get('[name=donorLocation]')
      .click()
      .type('Denver, CO')
      .should('have.value', 'Denver, CO')
    cy.get('[data-testid=donor-smoker-yes]').click()
    cy.get('[data-testid=donor-bio-input]')
      .click()
      .type('My first decided she likes solid food more, I would be happy to share my milk as I conclude feeding her.')
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/sorry')
    }));
    cy.get('[data-testid=donor-sorry-title]').contains('Sorry!')
  })

  it('Should get a thank you message when no to smoking is selected', () => {
    cy.get('[data-testid=donor-form]').children()
    cy.get('[name=donorName]')
      .click()
      .type('Jane Doe')
      .should('have.value', 'Jane Doe')
    cy.get('[name=donorEmail]')
      .click()
      .type('janedoe@example.com')
      .should('have.value', 'janedoe@example.com')
    cy.get('[name=donorPhone]')
      .click()
      .type('(555) 555-5555')
      .should('have.value', '5555555555')
    cy.get('[name=donorLocation]')
      .click()
      .type('Denver, CO')
      .should('have.value', 'Denver, CO')
    cy.get('[data-testid=donor-smoker-no]').click()
    cy.get('[data-testid=donor-bio-input]')
      .click()
      .type('My first decided she likes solid food more, I would be happy to share my milk as I conclude feeding her.')
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/thank-you')
    }));
    cy.get('[data-testid=thank-donor-title]').contains('Thank You!')
  })

  it('Should get error messages on empty input submits', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-name-error]').should('be.visible')
    cy.get('[data-testid=donor-email-error]').should('be.visible')
    cy.get('[data-testid=donor-phone-error]').should('be.visible')
    cy.get('[data-testid=donor-location-error]').should('be.visible')
    cy.get('[data-testid=donor-smoker-error]').should('be.visible')
    cy.get('[data-testid=donor-bio-error]').should('be.visible')
  })

  it('Should not have visible name error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-name-error]').should('be.visible')
    cy.get('[name="donorName"]')
      .click()
      .type('Jane Doe')
    cy.get('[data-testid=donor-name-error]').should('not.be.visible')
  })

  it('Should not have visible email error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-email-error]').should('be.visible')
    cy.get('[name="donorEmail"]')
      .click()
      .type('janedoe@example.com')
    cy.get('[data-testid=donor-email-error]').should('not.be.visible')
  })

  it('Should not have visible phone error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-phone-error]').should('be.visible')
    cy.get('[name="donorPhone"]')
      .click()
      .type('(555) 555-5555')
    cy.get('[data-testid=donor-phone-error]').should('not.be.visible')
  })

  it('Should not have visible location error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-location-error]').should('be.visible')
    cy.get('[name="donorLocation"]')
      .click()
      .type('Denver, CO')
    cy.get('[data-testid=donor-location-error]').should('not.be.visible')
  })

  it('Should not have visible smoker error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-smoker-error]').should('be.visible')
    cy.get('[data-testid=donor-smoker-no]')
      .click()
    cy.get('[data-testid=donor-smoker-error]').should('not.be.visible')
  })

  it('Should not have visible bio error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-bio-error]').should('be.visible')
    cy.get('[data-testid=donor-bio-input]')
      .click()
      .type('I have extra to share')
    cy.get('[data-testid=donor-bio-error]').should('not.be.visible')
  })

  it('Should be able to post', () => {
    cy.intercept('POST', 'https://shared-milk-api.herokuapp.com/graphql', (req) => {
      req.reply({
        statusCode: 200,
        fixture: 'createDonor.json'
      })
    })
  });

  it('Should redirect the user to the Thank You page', () => {
    cy.visit('http://localhost:3000/thank-you')
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });

  it('Should display a header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });
});