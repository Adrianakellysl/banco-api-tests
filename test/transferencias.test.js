const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencia = require('../fixtures/postTransferencia.json')

describe('Transferências', () => {
  let token
    
    beforeEach(async () => {
      token = await obterToken('adriana.lima', '123456')
    })

  describe('POST / transferencias', () => {
    it('Deve retornar sucesso com 201 quando o valor foi igual ou maior que R$10,00', async () => {
      const bodyTransferencias = { ...postTransferencia }

      const resposta = await request(process.env.BASE_URL) 
      .post('/transferencias')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(bodyTransferencias)
      
      
      expect(resposta.status).to.equal(201);
      console.log(resposta.body) 
    })
    it('Deve retornar falha com 422 quando o valor for menor que R$10,00', async () => {
      const bodyTransferencias = { ...postTransferencia }
      bodyTransferencias.valor = 8

      const resposta = await request(process.env.BASE_URL) 
      .post('/transferencias')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(bodyTransferencias)
      
      
      expect(resposta.status).to.equal(422);
      console.log(resposta.body)  
    })
  })

  describe('GET / transferencias/{id}', () => { 
    it('Deve retornar sucesso com 200 e dados iguais ao registro de transferências  do banco de dados quando o ID for válido', async () => {
      const resposta = await request(process.env.BASE_URL)
        .get('/transferencias/48')
        .set('Authorization', `Bearer ${token}`)

        expect(resposta.status).to.equal(200)
        expect(resposta.body.id).to.equal(48)
        expect(resposta.body.id).to.be.a('number')
        expect(resposta.body.conta_origem_id).to.equal(1)
    })
  })
  

   describe('GET / transferencias/{id}', () => { 
    it('Deve retornar 10 elementos na paginação quando informar o limite de 10 registros', async () => { 
      const resposta = await request(process.env.BASE_URL)
        .get('/transferencias?page=1&limit=10')
        .set('Authorization', `Bearer ${token}`)

      expect(resposta.status).to.equal(200)
      expect(resposta.body.limit).to.equal(10)
      expect(resposta.body.transferencias).to.have.lengthOf(10)
    })
  })
})
