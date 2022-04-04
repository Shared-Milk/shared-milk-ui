describe('Shared Milk landing page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });

  it('Should display a page with 7 elements', () => {
    cy.get('[data-testid=home]').should('be.visible').children().should('have.length', 2)
  })

  it('Should display a page title and organization mission statement', () => {
    cy.get('[data-testid=home]').children()
      .get('h2').contains('Our Mission')
      .get('aside.mission').children().should('have.length', 4)
  });

  it('Should display 3 large buttons; Need Milk, Donate Milk, and Need Support', () => {
    cy.get('[data-testid=home]').children().get('aside.buttons').children()
      .should('have.class', 'need')
      .should('have.class', 'donate')
      .should('have.class', 'support')
  });

  it('Should be able to click on all 3 landing page buttons and navigate to their corresponding pages', () => { 
    cy.get('[data-testid=home] > .buttons > .need').click()
    .location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/need-milk')
    }));
    cy.visit('http://localhost:3000')
    cy.get('[data-testid=home] > .buttons > .donate').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/donate')
    }));
    cy.visit('http://localhost:3000')
    cy.get('[data-testid=home] > .buttons > .support').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/support')
    }));
  });
});

