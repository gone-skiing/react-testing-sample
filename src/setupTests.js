import {expect} from 'chai';

/**
 * Combine both jest and chai matchers on expect
 *
 * https://medium.com/@RubenOostinga/combining-chai-and-jest-matchers-d12d1ffd0303
const originalNot = Object.getOwnPropertyDescriptor(
  chai.Assertion.prototype,
  'not',
).get;
Object.defineProperty(chai.Assertion.prototype, 'not', {
  get() {
    Object.assign(this, this.assignedNot);
    return originalNot.apply(this);
  },
  set(newNot) {
    this.assignedNot = newNot;
    return newNot;
  },
});

const originalExpect = global.expect;

global.expect = actual => {
  const originalMatchers = originalExpect(actual);
  const chaiMatchers = chai.expect(actual);
  return Object.assign(chaiMatchers, originalMatchers);
};

*/

// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/react/cleanup-after-each';

// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
//import '@testing-library/jest-dom/extend-expect';

// Please keep track of these and do not leave them here for too long.
const knownErrors = [
  // EK 8/14/19: React testing library wants react-dom 16.9
  'It looks like you\'re using a version of react-dom that supports the "act" function, but not an awaitable version of "act" which you will need. Please upgrade to at least react-dom@16.9.0 to remove this warning.',
];

global.beforeEach(() => {
  // Keep track of console.error calls to make sure we are not streaming unexpected
  // errors. Some warning are known and can be excluded to allow for
  // remediation period.
  global.consoleErrorCallCount = 0;
  global.errorSpy = jest.spyOn(console, 'error').mockImplementation(message => {
    let messagePrefix = '';
    if (!knownErrors.includes(message)) {
      global.consoleErrorCallCount = global.consoleErrorCallCount + 1;
      messagePrefix = '(console.error spy):';
    } else {
      messagePrefix = 'KNOWN TODO:';
    }
    console.log(messagePrefix, message);
  });
});

global.afterEach(() => {
  global.errorSpy.mockRestore();
});

/** Assert that test produced no console.error output. */
export function expectNoConsoleErrors() {
  expect(global.consoleErrorCallCount).to.equal(0);
}
