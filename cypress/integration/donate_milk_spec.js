describe('donate milk form user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/donate')
  });

  it('should get a sorry message when yes to smoking is selected', () => {
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

  it('should get a thank you message when no to smoking is selected', () => {
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

  it('should get error messages on empty input submits', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-name-error]').should('be.visible')
    cy.get('[data-testid=donor-email-error]').should('be.visible')
    cy.get('[data-testid=donor-phone-error]').should('be.visible')
    cy.get('[data-testid=donor-location-error]').should('be.visible')
    cy.get('[data-testid=donor-smoker-error]').should('be.visible')
    cy.get('[data-testid=donor-bio-error]').should('be.visible')
  })

  it('should not have visible name error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-name-error]').should('be.visible')
    cy.get('[data-testid=donor-name-input]')
      .click()
      .type('Jane Doe')
    cy.get('[data-testid=donor-name-error]').should('not.be.visible')
  })

  it('should not have visible email error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-email-error]').should('be.visible')
    cy.get('[data-testid=donor-email-input]')
      .click()
      .type('janedoe@example.com')
    cy.get('[data-testid=donor-email-error]').should('not.be.visible')
  })

  it('should not have visible phone error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-phone-error]').should('be.visible')
    cy.get('[data-testid=donor-phone-input]')
      .click()
      .type('(555) 555-5555')
    cy.get('[data-testid=donor-phone-error]').should('not.be.visible')
  })

  it('should not have visible location error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-location-error]').should('be.visible')
    cy.get('[data-testid=donor-location-input]')
      .click()
      .type('Denver, CO')
    cy.get('[data-testid=donor-location-error]').should('not.be.visible')
  })

  it('should not have visible smoker error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-smoker-error]').should('be.visible')
    cy.get('[data-testid=donor-smoker-no]')
      .click()
    cy.get('[data-testid=donor-smoker-error]').should('not.be.visible')
  })

  it('should not have visible bio error message after correcting', () => {
    cy.get('[data-testid=donate-submit-button]').should('be.visible').click()
    cy.get('[data-testid=donor-bio-error]').should('be.visible')
    cy.get('[data-testid=donor-bio-input]')
      .click()
      .type('I have extra to share')
    cy.get('[data-testid=donor-bio-error]').should('not.be.visible')
  })

  it('should be able to post', () => {
    cy.intercept('POST', 'https://secret-forest-87730.herokuapp.com/graphql', (req) => {
      req.reply({
        statusCode: 200,
        fixture: 'createDonor.json'
      })
    })
    cy.visit('http://localhost:3000/need-milk')
  });

});