describe('API testing', () => {
  it('testeo de lista de usuarios', () => {
    cy.request('GET','https://reqres.in/api/users?page=2').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array') 
      
      const users = response.body.data
      const michael = users.find(user=>user.email == 'michael.lawson@reqres.in')
      expect(michael).to.exist
    })



    })

  })


describe('crear usuario con API', () => {
    it('crear usuario', () => {
      const newUser = {
        
          "name": "morpheus",
          "job": "leader"

      }
      
      cy.request('POST','https://reqres.in/api/users', newUser).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('name', newUser.name) // aca lo que pide es que la propiedad name del body sea igual a la propiedad name del objeto newUser
        expect(response.body).to.have.property('job', newUser.job) // aca lo que pide es que la propiedad job del body sea igual a la propiedad job del objeto newUser
      })
})
 })

 describe('API testing usuario sin constantes', () => {
  it('testeo de lista de usuarios', () => {
    cy.request('GET','https://reqres.in/api/users/2"').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.have.property('id',2) 
      expect(response.body.data).to.have.property('email','janet.weaver@reqres.in')
      
    })
    })
  })