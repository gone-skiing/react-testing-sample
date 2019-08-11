import {expect} from 'chai';

import {asyncMethodExample} from '../AsyncMethod';

/**
 * Note async and await that are basically syntax sugar around promises.
 * Read more here:
 * https://jestjs.io/docs/en/asynchronous
 */
describe('Async examples', () => {
  it('Wait for promise to resolve', async () => {
    const EXPECTED_RESPONSE = 'Hello resolved promise!';

    console.log('Start: ', new Date());

    const actualResponse = await asyncMethodExample(EXPECTED_RESPONSE).then(
      response => {
        console.log('Entered then: ', response, new Date());
        return response;
      },
    );

    expect(actualResponse).to.equal(EXPECTED_RESPONSE);

    console.log('Done: ', new Date());
  });

  it('Wait for promise to reject', async () => {
    const EXPECTED_RESPONSE = 'Sad panda :-(';

    console.log('Start: ', new Date());

    const actualResponse = await asyncMethodExample(EXPECTED_RESPONSE, true)
      .then(response => {
        console.log('Entered then: ', response, new Date());
        throw 'Not expected to get into then';
      })
      .catch(error => {
        console.log('Entered catch: ', error, new Date());
        return error;
      });

    expect(actualResponse).to.equal(EXPECTED_RESPONSE);

    console.log('Done: ', new Date());
  });

  it('Wait for async completion with done', done => {
    asyncMethodExample().then(() => {
      done();
    });
  });
});
