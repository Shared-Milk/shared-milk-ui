describe('need milk donor results page user flow', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://secret-forest-87730.herokuapp.com/graphql', (req) => {
        req.reply({
          statusCode: 200,
          fixture: 'donorMoms.json'
        })
      })
  
      cy.visit('http://localhost:3000/need-milk/')
    })

    it('should have a donor results container that displays three donor moms', () => {
      cy.get('.main-container').should('have.length', 2)
        .get('.contact-grid > .contact-card:nth-child(1)')
    })
  })