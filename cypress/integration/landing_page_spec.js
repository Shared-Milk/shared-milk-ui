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
    cy.get('.nav').contains('Need Milk').click()
    // cy.wait(['api call']);
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/need-milk')
    }));
  });

  it('should be able to navigate to the Donate page form', () => {
    // cy.intercept(fetch call)
    cy.get('.nav').contains('Donate').click()
    // cy.wait(['api call']);
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/donate')
    }));
  });

  it('should be able to navigate to the About Us page view', () => {
    cy.get('.nav').contains('About Us').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/about')
    }))
  })

  it('should be able to navigate to the Support page view', () => {
    // cy.intercept(fetch call)
    cy.get('.nav').contains('Support').click()
    // cy.wait(['api call']);
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/support')
    }))
  })

  it('should display mission buttons for interested users on page load', () => {
    cy.get('.need').should('have.attr', 'href', '/need-milk')
    cy.get('.donate').should('have.attr', 'href', '/donate')
    cy.get('.support ').should('have.attr', 'href', '/support')
  })

  it('should navigate users to their page of interest on button click', () => {
  
    it('should navigate user to the Need Milk page', () => {
      cy.get('.need').should('have.attr', 'href', '/need-milk').click()
    // cy.wait(['api call']);
      cy.location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/need-milk')
     }))
    })

    it('should navigate user to the Donate Milk page', () => {
      cy.get('.need').should('have.attr', 'href', '/donate').click()
    // cy.wait(['api call']);
      cy.location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/donate')
     }))
    })

    it('should navigate user to the support page', () => {
      cy.get('.need').should('have.attr', 'href', '/support').click()
    // cy.wait(['api call']);
      cy.location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/support')
     }))
    })
  })

  it('should display organization mission statement', () => {
    cy.get('aside.mission').children().should('have.length', 4)
  })

  it('should display trademark at page footer', () => {
    cy.get('p').contains('© No Use Cryin\' Over Shared Milk')
  })

})

