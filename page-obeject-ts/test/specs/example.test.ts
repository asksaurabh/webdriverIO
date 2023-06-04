import HomePage from '../pageobjects/HomePage';

describe('First test using page objects pattern', () => {
  it('should load homepage', async () => {
    await HomePage.visit();
    await browser.pause(2000);
  });
});
