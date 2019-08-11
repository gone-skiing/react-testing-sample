import chai, {expect} from 'chai';

function testMe(response) {
  return response;
}

describe('Chai should assertion', () => {
  beforeEach(() => {
    chai.should();
  });

  it('Should example', async () => {
    const EXPECTED_RESPONSE = 'Hello resolved promise!';
    const actualResponse = testMe(EXPECTED_RESPONSE);
    actualResponse.should.equal(EXPECTED_RESPONSE);
  });
});

describe('Chai expect assertion', () => {
  it('Use eql to deeply compare objects and arrays', async () => {
    expect({bacon: 1}).to.eql({bacon: 1});
    expect([{bacon: 1}, {cheese: 1}]).to.eql([{bacon: 1}, {cheese: 1}]);
  });
});
