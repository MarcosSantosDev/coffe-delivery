describe('ShoppingCart page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/shopping-cart');
  });

  it.only('should visit to the ShoppingCart page', () => {
    cy.contains('Complete seu pedido').should('be.visible');
    cy.contains('Cafés selecionados').should('be.visible');

    cy.contains('Endereço de Entrega').should('be.visible');
    cy.contains('Informe o endereço onde desejar receber ser pedido').should(
      'be.visible',
    );
    cy.contains('Pagamento').should('be.visible');
    cy.contains(
      'O pagamento é feito na entrega. Escolha a forma que deseja pagar',
    ).should('be.visible');
    cy.get('form').within(() => {
      cy.get('input#address-cep').should('be.visible');
      cy.get('input#address-street').should('be.visible');
      cy.get('input#address-number').should('be.visible');
      cy.get('input#address-complement').should('be.visible');
      cy.get('input#address-district').should('be.visible');
      cy.get('input#address-city').should('be.visible');
      cy.get('input#address-uf').should('be.visible');
    });
  });

  it('should fill in form fields', () => {
    /**
     * TODO: create test for field filling case, when nextjs has version ^13 stable
     *
     * Next 13 unstable - Error: Hydration failed because the initial UI does not match what was rendered on the server.
     */
  });
});
