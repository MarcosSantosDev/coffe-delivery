describe('ConfirmedOrder page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/shopping-cart/confirmed-order');
  });

  it('should visit to the ConfirmedOrder page', () => {
    cy.contains('Uhu! Pedido confirmado').should('be.visible');
    cy.contains('Agora é só aguardar que logo o café chegará até você').should(
      'be.visible',
    );
    cy.get('img').should('be.visible');
  });
});
