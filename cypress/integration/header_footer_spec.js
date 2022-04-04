import { get } from "react-hook-form";

describe('Header, Nav, and Footer content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });

  it('Should have nav bar in header in desktop view, with 5 links', () => {
    cy.viewport(1532, 897)
      .get('[data-testid=header]').children()
      .should('have.class', 'logo')
      .get('nav').children('.active').should('have.length', 1)
      .get('.desktop-hidden').should('exist')
      .get('ul.menu').should('be.visible').children()
      .get('li').should('have.length', 5)
      .get('.menu > li:nth-child(1)').contains('Home')
      .get('.menu > li:nth-child(2)').contains('Need Milk')
      .get('.menu > li:nth-child(3)').contains('Donate')
      .get('.menu > li:nth-child(4)').contains('About')
      .get('.menu > li:nth-child(5)').contains('Support')
  });

  it('Should be able to navigate all pages on desktop view', () => {
    cy.viewport(1532, 897)
      .get('.menu > li:nth-child(1)').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/')
    }));
    cy.get('.menu > li:nth-child(2)').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/need-milk')
    }));
    cy.get('.menu > li:nth-child(3)').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/donate')
    }));
    cy.get('.menu > li:nth-child(4)').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/about')
    }));
    cy.get('.menu > li:nth-child(5)').click()
      .location().should((location => {
        expect(location.href).to.eq('http://localhost:3000/support')
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

  it('should have a footer', () => {
    cy.get('[data-testid=footer]').contains('Copyright')
  });
})