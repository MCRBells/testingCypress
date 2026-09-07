describe('resaltar una parte de la pagina, de su texto', () => {
  it('passes', () => {
    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
    cy.get('h1[class="main-top-header mw-html-heading"]').trigger('mouseover');
  })
})