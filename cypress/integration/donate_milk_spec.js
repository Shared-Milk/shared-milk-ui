describe('Donate Milk form parts check', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/donate')
  });

  it('should have a title', () => {
    cy.get('[data-testid=donate-title]').contains('Donate Milk')
  })

  it('should have a form', () => {
    cy.get('[data-testid=donate-form]').should('be.visible')
  })

  it('should have a place to type donor name', () => {
    cy.get('[data-testid=donor-name-input]')
      .click()
      .type('Jane Doe')
  })

  it('should have a place to type donor email', () => {
    cy.get('[data-testid=donor-email-input]')
      .click()
      .type('janedoe@example.com')
  })

  it('should have a place to type donor phone number', () => {
    cy.get('[data-testid=donor-phone-input]')
      .click()
      .type('(555) 555-5555')
  })

  it('should have a place to type donor location', () => {
    cy.get('[data-testid=donor-location-input]')
      .click()
      .type('Denver, CO')
  })

  it('should have a title for smoking radio buttons', () => {
    cy.get('[data-testid=donor-radio-descriptor]').should('be.visible')
  })

  it('should be able to select a smoking radio buttons', () => {
    cy.get('[data-testid=donor-smoker-yes]').click()
    cy.get('[data-testid=donor-smoker-no]').click()
  })

  it('should have a place to type donor bio', () => {
    cy.get('[data-testid=donor-bio-input]')
      .click()
      .type('My first decided she likes solid food more, I would be happy to share my milk as I conclude feeding her.')
  })

  it('should have a submit button', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
  })
});

describe('Messages', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/donate')
  });

  it.only('should get a sorry message when yes to smoking is selected', () => {
    cy.get('[data-testid=donor-name-input]')
      .click()
      .type('Jane Doe')
    cy.get('[data-testid=donor-email-input]')
      .click()
      .type('janedoe@example.com')
    cy.get('[data-testid=donor-phone-input]')
      .click()
      .type('(555) 555-5555')
    cy.get('[data-testid=donor-location-input]')
      .click()
      .type('Denver, CO')
    cy.get('[data-testid=donor-smoker-yes]').click()
    cy.get('[data-testid=donor-bio-input]')
      .click()
      .type('My first decided she likes solid food more, I would be happy to share my milk as I conclude feeding her.')
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-sorry-title]').contains('Sorry!')
  })

  it('should get a thank you message when yes to smoking is selected', () => {
    cy.get('[data-testid=donor-name-input]')
      .click()
      .type('Jane Doe')
    cy.get('[data-testid=donor-email-input]')
      .click()
      .type('janedoe@example.com')
    cy.get('[data-testid=donor-phone-input]')
      .click()
      .type('(555) 555-5555')
    cy.get('[data-testid=donor-location-input]')
      .click()
      .type('Denver, CO')
    cy.get('[data-testid=donor-smoker-no]').click()
    cy.get('[data-testid=donor-bio-input]')
      .click()
      .type('My first decided she likes solid food more, I would be happy to share my milk as I conclude feeding her.')
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=thank-donor-title]').contains('Thank You!')
  })
})

describe('Shared Milk landing page happy user flow', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://secret-forest-87730.herokuapp.com/graphql', (req) => {
      req.reply({
        statusCode: 200,
        fixture: 'createDonor.json'
      })
    });

    cy.visit('https://no-use-cryin-over-shared-milk.herokuapp.com/need-milk')
  });

});

describe('Shared Milk landing page sad user flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/donate')
  });
})