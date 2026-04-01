const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')


describe('Transferências', () => {
  describe('POST / transferencias', () => {
    it('Deve retornar sucesso com 201 quando o valor foi igual ou maior que R$10,00', async () => {
      const token = await obterToken('adriana.lima', '123456')

      const resposta = await request(process.env.BASE_URL) 
      .post('/transferencias')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(
        {
          'contaOrigem': 1,
          'contaDestino': 2,
          'valor': 500,
          'token': ""
        })
      
      
      expect(resposta.status).to.equal(201);
      console.log(resposta.body) 
    })
    it('Deve retornar falha com 422 quando o valor for menor que R$10,00', async () => {
      const token = await obterToken('adriana.lima', '123456')

      const resposta = await request(process.env.BASE_URL) 
      .post('/transferencias')
      .set('Content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(
        {
          'contaOrigem': 2,
          'contaDestino': 3,
          'valor': 9,
          'token': ""
        })
      
      
      expect(resposta.status).to.equal(422);
      console.log(resposta.body)  
    })
  })
})
