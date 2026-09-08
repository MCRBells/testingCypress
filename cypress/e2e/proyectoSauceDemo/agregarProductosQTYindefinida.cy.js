describe('Agregando productos de cantidad indefinida añ carrito y verificando total', () => {
    it('Agregando productos al carrito y verificar total', () => {
    // 1) visitar pagina e ingresar credenciales
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    //2) Agregar productos al carrito de manera indefinida
    cy.get('button[data-test^="add-to-cart"]').then(($buttons)=> {
        const quantity = $buttons.length

        cy.wrap($buttons).each(($btn) => {
            cy.wrap($btn).click()
        })

    //3) Verificar que el total del carrito sea igual a la cantidad de productos agregados

      cy.get('span[data-test="shopping-cart-badge"]').should('have.text', quantity.toString())
    })
   
})
 })