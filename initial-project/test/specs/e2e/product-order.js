describe('Order Products', () => {
  before(async () => {
    await browser.url('https://www.saucedemo.com/');
    await browser.sauceLogin();
  });

  after(async () => {
    await browser.sauceLogout();
  });

  it('should complete product order', async () => {
    await browser.pause(2000);
  });
});
