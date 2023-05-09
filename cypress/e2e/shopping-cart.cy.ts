describe('ShoppingCart page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/shopping-cart');
  });

  it('should visit to the ShoppingCart page', () => {
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

  const form = {
    cep: '12345678',
    street: 'Rua 01',
    number: '100',
    complement: 'AP 10',
    district: 'Belo Horizonte',
    city: 'Belo Horizonte',
    uf: 'MG',
    card: 'money',
    quantity: '1',
  };

  it('should fill in form fields', () => {
    cy.get('form').within(() => {
      cy.get('input#address-cep').should('be.visible').type(form.cep);
      cy.get('input#address-cep').should('have.value', form.cep);

      cy.get('input#address-street').should('be.visible').type(form.street);
      cy.get('input#address-street').should('have.value', form.street);

      cy.get('input#address-number').should('be.visible').type(form.number);
      cy.get('input#address-number').should('have.value', form.number);

      cy.get('input#address-complement')
        .should('be.visible')
        .type(form.complement);
      cy.get('input#address-complement').should('have.value', form.complement);

      cy.get('input#address-district').should('be.visible').type(form.district);
      cy.get('input#address-district').should('have.value', form.district);

      cy.get('input#address-city').should('be.visible').type(form.city);
      cy.get('input#address-city').should('have.value', form.city);

      cy.get('input#address-uf').should('be.visible').type(form.uf);
      cy.get('input#address-uf').should('have.value', form.uf);

      cy.get('input[name=card]').should('not.be.visible').check('money');
      cy.get('input[name=card][value=money]').should('be.checked');
    });
  });

  it('should display message when cart is empty and submit button should be disabled', () => {
    cy.contains('Carrinho de compras vazio').should('be.visible');
    cy.get('button[type=submit]')
      .contains('CONFIRMAR PEDIDO')
      .should('be.disabled');
  });
});
