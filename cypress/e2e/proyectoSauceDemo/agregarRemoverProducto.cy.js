describe('Prueba de varios productos en el carrito', () => {
  it('Agregando productos al carrito y verificar total', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // 1) Agregar TODOS los productos
     cy.get('button[data-test^="add-to-cart"]').each(($btn) => {
      cy.wrap($btn).click() })
      
        //2) verificar total del carrito sea igual a 6
      cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '6') 

      //3) Remover TODOS los productos
     cy.get('button[data-test^="remove"]').each(($btn) =>{
      cy.wrap($btn).click()})

      //4) verificar total del carrito sea igual a 0
      cy.get('span[data-test="shopping-cart-badge"]').should('not.exist') 
  })
})
