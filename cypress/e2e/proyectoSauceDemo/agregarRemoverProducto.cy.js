describe('Prueba de varios productos en el carrito', () => {
  it('Agregando y removiendo productos del carrito', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // 1) Agregar TODOS los productos
     cy.get('button[class="btn btn_primary btn_small btn_inventory"]').each(($btn) => {
      cy.wrap($btn).click()
    })

    // 2) Validar que el carrito tiene 6 items
    cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '6')

    // 3) Ir al carrito
    cy.get('a[data-test="shopping-cart-link"]').click()

    // 4) Remover TODOS los productos
    cy.get('button[class="btn btn_secondary btn_small cart_button"]').as('removeButtons')
    cy.get('@removeButtons').each(($btn) => {
      cy.wrap($btn).click()
    })

    // 5) Validar que el carrito quedó vacío
    cy.get('span[data-test="shopping-cart-badge"]').should('not.exist')
  })
})

