describe('My first test suite', () => {
  it.skip('My first test case', async () => {
    let myUrl = 'https://www.example.com';

    await browser.url(myUrl);
    await browser.pause(2000);

    await browser.url('https://www.google.com');
    await browser.pause(2000);
  });

  it('should assert browser title and url', async () => {
    await browser.url('https://coderadio.freecodecamp.org/');
    await browser.pause(2000);

    // OLD WAY
    const pageTitle = await browser.getTitle();
    const pageUrl = await browser.getUrl();

    expect(pageTitle).toContain('freeCodeCamp.org Code Radio');
    expect(pageUrl).toContain('coderadio.freecodecamp.org');

    // NEW WAY
    expect(browser).toHaveTitleContaining('freeCodeCamp.org Code Radio');
    expect(browser).toHaveUrlContaining('coderadio.freecodecamp.org');
  });
});
