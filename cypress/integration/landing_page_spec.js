describe('Shared Milk landing page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should display page title and navigation links on page load', () => {
    cy.get('[data-testid=site-title]').contains('No Use Cryin\' Over Shared Milk')
    cy.get('[data-testid="home-link"]').contains('Home')
    cy.get('[data-testid="need-milk-link"]').contains('Need Milk')
    cy.get('[data-testid="donate-milk-link"]').contains('Donate')
    cy.get('[data-testid="about-link"]').contains('About')
    cy.get('[data-testid="support-link"]').contains('Support')
  });

  it('should be able to navigate all pages on desktop view', () => {
    cy.viewport(1532, 897)
      .get('[data-testid="need-milk-link"]').contains('Need Milk').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/need-milk')
    }));
    cy.get('[data-testid="donate-milk-link"]').contains('Donate').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/donate')
    }));
    cy.get('[data-testid="about-link"]').contains('About').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/about')
    }));
    cy.get('[data-testid="support-link"]').contains('Support').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/support')
    }));
    cy.get('[data-testid="home-link"]').contains('Home').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/')
    }));
  });

  it('should be able to navigate to all pages on mobile view', () => {
    cy.viewport(1004, 883)
      .get('.desktop-hidden > div > div > .bm-burger-button > #react-burger-menu-btn').click()
      .get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .active').click()
      .get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .bm-item:nth-child(2)').click().contains('Need Milk').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/need-milk')
    }));
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .active').click()
      .get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .bm-item:nth-child(3)').click().contains('Donate').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/donate')
    }));
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .active').click()
      .get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .bm-item:nth-child(4)').click().contains('About').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/about')
    }));
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .active').click()
      .get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .bm-item:nth-child(5)').click().contains('Support').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/support')
    }));
    cy.get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .active').click()
      .get('div > .bm-menu-wrap > .bm-menu > .bm-item-list > .bm-item:nth-child(1)').click().contains('Home').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/')
    }));
  });

  it('should display organization mission statement', () => {
    cy.get('aside.mission').children().should('have.length', 4)
  });

  it('should display a copyright footer', () => {
    cy.get('footer > p')
  });
});

