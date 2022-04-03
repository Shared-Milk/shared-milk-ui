describe('Shared Milk landing page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });

  it('should be able to navigate to the Need Milk page view on desktop or mobile', () => {
    cy.viewport(1532, 897)
    // cy.intercept(fetch call)
    cy.get('[data-testid="need-milk-link"]').contains('Need Milk').click()
    // cy.wait(['api call']);
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/need-milk')
    }));
    cy.viewport(1004, 883)
    cy.get('.desktop-hidden > div > div > .bm-burger-button > #react-burger-menu-btn').click()
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .active').click()
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .bm-item:nth-child(2)').click().contains('Need Milk').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/need-milk')
    }));
  });
  

  it('should be able to navigate to the Donate page form on desktop or mobile', () => {
    cy.viewport(1532, 897)
    cy.get('header > nav > .menu > li:nth-child(3)').contains('Donate').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/donate')
    }));
    cy.viewport(1004, 883)
    cy.get('.desktop-hidden > div > div > .bm-burger-button > #react-burger-menu-btn').click()
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .active').click()
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .bm-item:nth-child(3)').click().click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/donate')
    }));
  });

  it('should be able to navigate to the About page view', () => {
    cy.viewport(1532, 897)
    cy.get('header > nav > .menu > li:nth-child(4)').contains('About').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/about')
    }))
    cy.viewport(1004, 883)
    cy.get('.desktop-hidden > div > div > .bm-burger-button > #react-burger-menu-btn').click()
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .active').click()
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .bm-item:nth-child(4)').click().click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/about')
    }));
  })

  it('should be able to navigate to the Support page view', () => {
    cy.viewport(1532, 897)
    cy.get('header > nav > .menu > li:nth-child(5)').contains('Support').click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/support')
    }))
    cy.viewport(1004, 883)
    cy.get('.desktop-hidden > div > div > .bm-burger-button > #react-burger-menu-btn').click()
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .active').click()
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .bm-item:nth-child(5)').click().click()
    cy.location().should((location => {
      expect(location.href).to.eq('http://localhost:3000/support')
    }));
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

  it('should display a copyright footer', () => {
    cy.get('footer > p')
  })

})

