describe('testeo foreach', () => {
  it('testeando logins con foreach', () => {
    cy.fixture('usuarios.json').then((logins) => {
      logins.forEach((login) =>{
        cy.visit('https://www.d1.com.co/login?returnUrl=/account')
        cy.get('input[placeholder="tucorreo@ejemplo.com"]').type(login.nombre)
        cy.get('input[type="password"]').type(login.password)
        cy.contains('button', 'Iniciar sesión').click()
        cy.reload()
      })
    })
  })
})