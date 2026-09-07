// Ingresar a la página de SauceDemo con fixtures y con foreach

describe("Testeos de log in", () => {
    it("Ingresar con fixtures y foreach", () => {
        cy.visit('https://www.saucedemo.com/')
        cy.fixture("datos.json").then((data) => {
            data.forEach(user => {
                cy.get('#user-name').type(user.usuario)
                cy.wait(1000)
                cy.get('#password').type(user.contraseña)
                cy.wait(1000)
                cy.get('#login-button').click()
                cy.wait(1000)
                cy.get('button[id="react-burger-menu-btn"]').click()
                cy.wait(1000)
                cy.get('a[id="logout_sidebar_link"]').click()
                cy.wait(1000)
            })
        })
    })
})