describe('My first test suite', () => {
  it('My first test case', async () => {
    let myUrl = 'https://www.example.com';

    await browser.url(myUrl);
    await browser.pause(2000);

    await browser.url('https://www.google.com');
    await browser.pause(2000);
  });
});
