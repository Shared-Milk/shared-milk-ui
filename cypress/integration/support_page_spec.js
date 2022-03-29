describe('Support page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/support')
  });

  it('should display page title and navigation links on page load', () => {
    cy.get('[data-testid=site-title]').contains('No Use Cryin\' Over Shared Milk')
    cy.get('[data-testid=nav-bar]').contains('Home')
    cy.get('[data-testid=nav-bar]').contains('Need Milk')
    cy.get('[data-testid=nav-bar]').contains('Donate')
    cy.get('[data-testid=nav-bar]').contains('About Us')
    cy.get('[data-testid=nav-bar]').contains('Support')
  });

  it('should have a page title', () => {
    cy.get('h2').contains('Support Resources')
  })

  it('should have support links section', () => {
    cy.get(['data-testid=support-links'])
  })

  it('should have a link to La Leche League USA', () => {
    cy.get(['data-testid=lll-link']).request('https://www.lllusa.org/')
  })

  it('should have a link to Medela', () => {
    cy.get(['data-testid=medela-link']).request('https://www.medela.us')
  })

  it('should have a link to nest collaborative', () => {
    cy.get(['data-testid=nest-link']).request('https://www.nestcollaborative.com')
  })

  it('should have a link to WIC breastfeeding', () => {
    cy.get(['data-testid=wic-link']).request('https://wicbreastfeeding.fns.usda.gov/')
  })

  it('should have a link to Postpartum net', () => {
    cy.get(['data-testid=support-link']).request('https://www.postpartum.net/')
  })

  it('should have a link to Mayo clinic', () => {
    cy.get(['data-testid=mayo-link']).request('https://www.mayoclinic.org/diseases-conditions/postpartum-depression/symptoms-causes/syc-20376617')
  })

  it('should have a link to Postpartum net', () => {
    cy.get(['data-testid=new-mom-link']).request('https://newmomhealth.com/')
  })

  it('should have a suicide hotline number', () => {
    cy.get('button').last().should('have.text', 'National Suicide Prevention Hotline:  1-800-273-TALK (8255)')
  })
})