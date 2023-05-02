describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should visit to the Home page', () => {
    cy.get('.home__section--one').within(() => {
      cy.get('img').should('be.visible');
      cy.contains('Encontre o café perfeito para qualquer hora do dia').should(
        'be.visible',
      );
      cy.contains(
        'Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora',
      ).should('be.visible');
      cy.contains('Compra simples e segura').should('be.visible');
      cy.contains('Embalagem mantém o café intacto').should('be.visible');
      cy.contains('Entrega rápida e rastreada').should('be.visible');
      cy.contains('O café chega fresquinho até você').should('be.visible');
    });
  });
});
