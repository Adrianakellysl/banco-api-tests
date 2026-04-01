const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencia = require('../fixtures/postTransferencia.json')

describe('Transferências', () => {
  describe('POST / transferencias', () => {
    let token
    
    beforeEach(async () => {
      token = await obterToken('adriana.lima', '123456')
    })

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
})
