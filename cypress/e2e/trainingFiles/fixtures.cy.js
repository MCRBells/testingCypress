describe('Usando fixtures', () => {
  beforeEach(() => {
    cy.visit('https://web.bewe.co/academia-poledanzarte/login')
  })
  it('Usando datos json para login', () => {
    cy.fixture('usuarios.json').then((datos) => {
      // Utiliza los datos del fixture para el login
      const usuario = datos[0] // Accede al primer objeto del array
      cy.get('#email').type(usuario.nombre) // Ingresa el nombre de usuario desde el fixture
      cy.get('#password').type(usuario.password) // Ingresa la contraseña desde el fixture
      cy.get('button[type="submit"]').click() // Haz clic en el botón de inicio de sesión
    })
  })
  it('Usando datos json para login', () => {
    cy.fixture('usuarios.json').then((datos) => {
      // Utiliza los datos del fixture para el login
      const usuario = datos[1] // Accede al segundo objeto del array
      cy.get('#email').type(usuario.nombre) // Ingresa el nombre de usuario desde el fixture
      cy.get('#password').type(usuario.password) // Ingresa la contraseña desde el fixture
      cy.get('button[type="submit"]').click() // Haz clic en el botón de inicio de sesión
    })
  })
 })
