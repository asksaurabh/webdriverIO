describe('My first test suite', () => {
  it('My first test case', async () => {
    let myUrl = 'https://www.example.com';
    await browser.url(myUrl);
  });
});
