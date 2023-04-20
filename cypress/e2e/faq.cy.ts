describe('Faq page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/faq');
  });

  it('should visit to the Faq page', () => {
    cy.contains('Coffe Delivery').should('be.visible');
  });
});
