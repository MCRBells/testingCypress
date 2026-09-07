describe("Inicio de sesion", ()=> { 
    it("Visita la pagina web de inicio de sesion", ()=>{ 
        cy.visit("http://localhost/INVENTARIO-main/INVENTARIO-main/") 
        cy.get('input[name="login_usuario"]').type('Administrador') 
        cy.get('input[name="login_clave"]').type('Administrador')
        cy.get('button[type="submit"]').click()
    }) 

}) 