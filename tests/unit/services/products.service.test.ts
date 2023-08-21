import chai, { expect } from 'chai';
import chaiHttp from 'chai-http'
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model'
import { newProduct } from '../../mocks/productsMocks';
import app from '../../../src/app'

chai.use(chaiHttp);

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

    it('Testa se é possível cadastrar um novo produto com sucesso', async function() {
      const result = ProductModel.build(newProduct);
      sinon.stub(ProductModel, 'create').resolves(result);

      const res = await chai.request(app).post('/products').send(newProduct);
      expect(res.status).to.equal(201);
    })
});
