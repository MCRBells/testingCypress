const users = require('C:/Users/Lenovo/Cypress/cypress/fixtures/datos.json')
const buyers = require('C:/Users/Lenovo/Cypress/cypress/fixtures/checkOutData.json')

describe('Prueba dinámica con varios usuarios', () => {

  users.forEach((user, index) => {

    it(`Compra completa con usuario: ${user.usuario}`, () => {

      cy.visit('https://www.saucedemo.com/')
      cy.wait(500)
      cy.get('#user-name').type(user.usuario)
      cy.wait(500)
      cy.get('#password').type(user.contraseña)
      cy.wait(500)
      cy.get('#login-button').click()
      cy.wait(500)

    //2) Agregar productos al carrito de manera indefinida
    cy.get('button[data-test^="add-to-cart"]').then(($buttons)=> {
        const quantity = $buttons.length

        cy.wrap($buttons).each(($btn) => {
            cy.wrap($btn).click()
        })

    //3) Verificar que el total del carrito sea igual a la cantidad de productos agregados

      cy.get('span[data-test="shopping-cart-badge"]').should('have.text', quantity.toString())
    })   

      // checkout
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.wait(500)
      cy.get('#checkout').click()
      cy.wait(500)

      const buyer = buyers[index]   // buyer correspondiente al usuario

      cy.get('#first-name').type(buyer.FirstName)
      cy.wait(500)
      cy.get('#last-name').type(buyer.LastName)
      cy.wait(500)
      cy.get('#postal-code').type(buyer.Zip)
      cy.wait(500)
      cy.get('#continue').click()
      cy.wait(500)

      cy.get('[data-test="total-label"]')
        .invoke('text')
        .then((txt) => {
          const price = Number(txt.replace('Total: $', '').trim())
          cy.log('El total es:', price)
          expect(price).to.be.greaterThan(0)
        })
        cy.wait(500)

      cy.get('#finish').click()
      cy.wait(500)
      cy.get('#back-to-products').click()
    })

  })

})
