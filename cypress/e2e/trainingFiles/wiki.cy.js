describe('Probando Wikipedia', () => {
  it('passes', () => {
    //visitar paginas
    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
    cy.url().should('include','wikipedia')

  //seleccion de elementos
  // cy.get('a[href="https://es.wikipedia.org/wiki/Wikipedia:Bienvenidos"]').click()
  //cy.get('a[href="https://es.wikipedia.org/wiki/Harriet_Tubman"] > span.mw-ui-button').click()
   cy.get('a[href="/wiki/Especial:Buscar"]').click()
   cy.get('#searchform').type('Cypress')
   cy.contains('button','Buscar').click()

   // control de tiempo

   cy.wait(3000)

   //validacion y aserciones
   cy.get('.searchmatch:contains("Cypress")').should('exist')

   // clear data

    cy.get('#searchText > [name="search"]').clear()

    //recargar la pagina

    cy.reload()

    //cy intercept

    cy.exec('start calc')
  })
}) 