describe('prueba de apertura de google', ()=> {
    it('Abre la pagina de google correctamente', () =>{
        cy.visit('https://www.google.com')
        cy.title().should('eq','Google')
    })
})