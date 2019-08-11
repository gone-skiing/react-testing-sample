import {expect} from 'chai';
import fetchMock from 'fetch-mock';
import {fetchIngredients} from '../Fetch';

describe('Mock fetch', () => {
  it('Mock all calls', async () => {
    const mockData = {bacon: 1};
    fetchMock.mock('*', mockData);

    const actualResponse = await fetchIngredients();
    expect(actualResponse).to.eql(mockData);
  });
});
