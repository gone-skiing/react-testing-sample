/**
 * Test method that will resolve or reject with 2 sec delay.
 *
 * @param shouldReject create a promise that will reject rather than resolve.
 * @param response response to include with resolve or reject
 * @returns {Promise<>}
 */
export function asyncMethodExample(response, shouldReject) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-console
    console.log('Entered executor: ', new Date());
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log('Entered handler: ', new Date());
      if (shouldReject) {
        reject(response || 'Promise rejected');
      }
      resolve(response || 'Promise resolved');
    }, 2000);
  });
}
