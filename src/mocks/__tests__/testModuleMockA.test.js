import {expect} from 'chai';
import * as moduleB from '../moduleB';
import * as moduleA from '../moduleA';

afterEach(jest.restoreAllMocks);

describe('test Module Mock A', () => {
  it('It returns mocked value', () => {
    jest.spyOn(moduleA, 'functionA').mockImplementation(() => {
      return 'Mock A';
    });
    expect(moduleA.functionA()).to.equal('Mock A');
    expect(moduleB.functionB()).to.equal('Mock A');
  });

  it('It returns real value', () => {
    expect(moduleA.functionA()).to.equal('Real A');
    expect(moduleB.functionB()).to.equal('Real A');
  });
});
