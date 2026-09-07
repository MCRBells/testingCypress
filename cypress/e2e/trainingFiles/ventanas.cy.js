// forzar otra parte de la pagina para abrirse

/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
    cy.visit('https://es.wikipedia.org/wiki/Deshielo_cubano', {force: true})
  })
}) */

  // abrir una ventana nueva

  describe('abrir ventana nueva', () =>{
    it ('passes', () => {
      cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
      cy.window().then((win) => {
        win.open('https://es.wikipedia.org/wiki/Deshielo_cubano')
      })
    })
  })
  