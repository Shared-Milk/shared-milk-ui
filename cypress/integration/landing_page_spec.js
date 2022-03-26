describe('Shared Milk landing page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should display page title and navigation links on page load', () => {
    cy.get('h1').contains('No Use Cryin\' Over Shared Milk')
    cy.get('.nav').contains('Home')
    cy.get('.nav').contains('Need Milk')
    cy.get('.nav').contains('Donate')
    cy.get('.nav').contains('About Us')
    cy.get('.nav').contains('Support')
  });

  it('should be able to navigate to the Need Milk page view', () => {
    // cy.intercept(fetch call)
    cy.get('.nav').contains('Need Milk').click();
    // cy.wait(['api call']);
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/need-milk')
    }));

    it('should be able to navigate to the Donate page form', () => {
      // cy.intercept(fetch call)
      cy.get('.nav').contains('Donate').click();
      // cy.wait(['api call']);
      cy.location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/donate')
      }));
    });

    it('should be able to navigate to the About Us page view', () => {
      // cy.intercept(fetch call)
      cy.get('.nav').contains('About Us').click();
      // cy.wait(['api call']);
      cy.location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/about-us')
      }));
    });

    it('should be able to navigate to the Support page view', () => {
      // cy.intercept(fetch call)
      cy.get('.nav').contains('Support').click();
      // cy.wait(['api call']);
      cy.location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/support')
      }));
    });

  });
});