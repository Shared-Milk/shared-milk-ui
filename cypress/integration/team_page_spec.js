describe('About page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/our-team')
  });

  it('Should display a header and footer on page load', () => {
    cy.get('[data-testid=header]').should('be.visible')
    cy.get('[data-testid=footer]').should('be.visible')
  });

  it('Should display a page with 3 elements', () => {
    cy.get('[data-testid=about]').should('be.visible').children().should('have.length', 3)
  });

  it('The first section should display our tech stack section and information, with a link to Turing School of Software & Design', () => {
    cy.get('[data-testid=about] > :nth-child(1)').should('be.visible').contains('Our Tech Stack')
      .get('p:nth-child(2)').should('be.visible').contains('This is a Turing School of Software & Design')
      .get('[data-testid=turing-link]').should('be.visible').request('https://turing.edu/')
  });

  it('Should display a Meet the Team container with a title and instructions', () => {
    cy.get('[data-testid=team-container]').should('be.visible').children()
      .get('h3:nth-child(1)').contains('Meet the Team')
      .get('[data-testid=team-container] > p').should('have.length', 1)
  });

  it('Should display a grid of team member photos, names, pronouns, and social icons', () => {
    cy.get('[data-testid=team-grid]').should('be.visible').children()
      .get('[data-testid=member-card]').children()
      .get('.name-and-photo > h4')
      .get('.name-and-photo > .bio-photo')
      .get('.pronouns > h4')
      .get('.social-links')
  });

  it('Should be able to be click on any team members name or photo to visit their bio page', () => {
    cy.get('[data-testid=team-container] > [data-testid=team-grid] > .member-card:nth-child(1) > .name-and-photo > .bio-photo').click().visit('http://localhost:3000/our-team/seth_perna')
    cy.visit('http://localhost:3000/our-team')
    cy.get('[data-testid=team-container] > [data-testid=team-grid] > .member-card:nth-child(7) > .name-and-photo > .bio-photo').click().visit('http://localhost:3000/our-team/devon_wigle')
  });

  it('Should display a LinkedIn social icon for each person that can be clicked on to visit that team members LinkedIn page', () => {
    cy.get('[data-testid=team-container] > [data-testid=team-grid] > .member-card:nth-child(1)').children()
      .get('.social-links > a:nth-child(1) > .social-icon').should('be.visible').click({ multiple: true })
  });

  it('Should display a Github social icon for each person that can be clicked on to visit that team members Github page', () => {
    cy.get('[data-testid=team-container] > [data-testid=team-grid] > .member-card:nth-child(1)').children()
      .get('.social-links > a:nth-child(2) > .social-icon').should('be.visible').click({ multiple: true })
  });
});