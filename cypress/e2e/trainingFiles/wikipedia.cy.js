describe ('Verificando aserciones en wikipedia', () => {
it ('verificando aserciones', () => {
  //verificar la existencia de un elemento
cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
//verificar el titulo
cy.get('title').should('exist')
cy.title().should('eq','Wikipedia, la enciclopedia libre')

// verificar si un elemento esta visible
cy.get('img[alt="Estanque en el Golden Gate Park"]').should('be.visible')

//verificar un atriburo de un elemento
cy.get('input[name="search"]').should('have.attr','placeholder','Buscar en Wikipedia')
})
})