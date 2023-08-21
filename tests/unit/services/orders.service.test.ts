import chai, { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import app from '../../../src/app';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa se é possível cadastrar um novo produto com sucesso', async function() {
    sinon.stub(OrderModel, 'findAll').resolves([]);

    const res = await chai.request(app).get('/orders');

    expect(res.status).to.equal(200);
  })
});
