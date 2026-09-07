//organizacion en suites

describe('Autenticacion', () => {
// escribir todas las pruebas relacionadas con autenticacion
// ejemplo, contraseñas, usuarios, mensajes de si esta correcta la informacion entrada, etc
 
})

describe('perfil de usuario', () => {
// escribir todas las pruebas relacionadas con el perfil del usuario
// si hay foto, editar, eliminar, agregar informacion, etc
})

describe('procesos de pagos', () => {
// escribir tods las pruebas relacionadas con los procesos de pagos
// ejemplo, agregar tarjeta, eliminar tarjeta, ver historial de pagos, etc 
})

// Creacion de alias

cy.get('.username-input').type('sjdkadjl').as('usernameinput')
cy.get('usernameinput').should('have.value','sjdkadjl') // aca, en lugar de escribit toda la ruta del elemento, solo se escribe el alias que se creo para ese elemento

// Funciones personalizadas
// se usan para no repetir codigo, y para que el codigo sea mas legible y entendible

function login(user,password) {
  cy.get('.username-input').type(user)
  cy.get('.password-input').type(password)
  cy.get('.login-button').click()
}

login('usuario1','contraseña1') // aca se esta llamando la funcion y pasando los parametros en lugar de hacerlo de manera repetitiva, y ademas se puede cambiar el usuario y la contraseña facilmente sin tener que cambiar todo el codigo

// pruebas modulares
// se usan para dividir las pruebas en modulos, para que sean mas faciles de entender y mantener

describe('autenticacion', () => {
  beforeEach(() => {
    //login
  })
  it('debemos permitir iniciar sesion con credencailes validas', () => {
    //prueba de inicio de sesion con credenciales validas
  })
  it('debemos mostrar un mensaje de error con credenciales invalidas', () => {
    //prueba de inicio de sesion con credenciales invalidas
  })
  it('debemos redirigir al usuario a la pagina de perfil despues de iniciar sesion', () => {
    //prueba de redireccionamiento a la pagina de perfil
  })
})