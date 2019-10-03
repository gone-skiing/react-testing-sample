import {expect} from 'chai';
import fetchMock from 'fetch-mock';
import {fetchIngredients} from '../Fetch';

describe('Mock fetch', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Mock all calls', async () => {
    const mockData = {bacon: 1};
    fetchMock.mock('*', mockData);

    const actualResponse = await fetchIngredients();
    expect(actualResponse).to.eql(mockData);
  });

  it('Mock calls matching regex', async () => {
    const mockData = {bacon: 1};
    fetchMock.mock(/firebaseio\.com\/ingredients\.json/, mockData);

    const actualResponse = await fetchIngredients();
    expect(actualResponse).to.eql(mockData);
  });

  it('Mock failure case', async () => {
    const MY_ERROR = 'my error';
    fetchMock.mock('*', Promise.reject(MY_ERROR));

    try {
      await fetchIngredients();
    } catch (e) {
      expect(e).to.equal(MY_ERROR);
    }
  });
});
