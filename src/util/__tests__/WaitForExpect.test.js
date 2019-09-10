import {wait} from '@testing-library/react';
import {expect} from 'chai';

test('it waits for expectation to pass', async () => {
  let numberToChange = 10;
  // we are using random timeout here to simulate a real-time example
  // of an async operation calling a callback at a non-deterministic time
  const randomTimeout = Math.floor(Math.random() * 300);
  setTimeout(() => {
    numberToChange = 100;
  }, randomTimeout);

  console.log(new Date());
  expect(numberToChange).to.equal(10);

  await wait(() => {
    expect(numberToChange).to.equal(100);
  });
  console.log(new Date());
});
