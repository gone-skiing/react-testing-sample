import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import {asyncMethodExample} from '../AsyncMethod';

/**
 * Chai as Promised extends Chai with a fluent language for asserting facts
 * about promises.
 *
 * https://www.chaijs.com/plugins/chai-as-promised/
 */
describe('Chai as promised examples', () => {
  it('Assert and notify when done', done => {
    chai.use(chaiAsPromised);
    chai.should();

    const EXPECTED_RESPONSE = 'Hello resolved promise!';
    asyncMethodExample(EXPECTED_RESPONSE)
      .should.eventually.equal(EXPECTED_RESPONSE)
      .notify(done);
  });
});
