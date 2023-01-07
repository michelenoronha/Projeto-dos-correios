Describe ('buscar por cep e validar o resultado')= 
it('teste de api correio')()=>{
         cy.request({
              method:'GET'
                  url:https:'/60830525',
            }).then((response))=>{
expect(response.status).to.eq(200)
            })
          })
          it('teste 02 api correio',()=>{
            cy.request({
              method:'GET'
              url:60830525
            }).then((response)=>{
              expect(response.status).to.eq(200)
              expect(JSON.stringify(response.body)).to
              .equal(JSON.stringify(enderecos))
              "baseUrl":"https://cep-v2-americanas-npf.b2w.io/cep",
              "video": false



