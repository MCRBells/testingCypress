describe('Prueba de checkout con varios productos', () => {
  it('checkout solo con 1 usuario', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // 1) Agregar TODOS los productos
     cy.get('button[data-test^="add-to-cart"]').each(($btn) => {
      cy.wrap($btn).click() })
      
    //2) verificar total del carrito sea igual a 6
      cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '6')
      
    //3) checkout
        cy.get('a[data-test="shopping-cart-link"]').click()
        cy.get('#checkout').click()
        cy.fixture('checkOutInfo.json').then((personalData)=>{
            const data = personalData[0]
            cy.get('#first-name').type(data.FirstName)
            cy.get('#last-name').type(data.LastName)
            cy.get('#postal-code').type(data.Zip)
            cy.get('#continue').click()
        })
    //4) verificar total indefinido

    cy.get('[data-test="total-label"]').invoke('text').then((totalText)=>{
        const numero = Number(totalText.replace('Total: $', ''))
        cy.log('El total es: ', numero)
       })    
      
  })
})
