describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should visit to the Home page', () => {
    cy.contains('Home').should('be.visible');
  });
});
