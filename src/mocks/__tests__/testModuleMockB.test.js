import {expect} from 'chai';
import * as moduleB from '../moduleB';

afterEach(jest.resetAllMocks);

describe('test Module Mock B', () => {
  it('It returns real value', () => {
    expect(moduleB.functionB()).to.equal('Real A');
  });
});
