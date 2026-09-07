describe('Prueba de 1 producto en el carrito', () => {
  it('Agregando y removiendo productos al carrito y verificar total', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // 1) Agregar TODOS los productos
     cy.get('button[class="btn btn_primary btn_small btn_inventory "]').each(($btn) => {
      cy.wrap($btn).click()
    })

  })
})
