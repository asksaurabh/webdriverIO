describe('Search feature', () => {
  it.only('should search for user input using keyboard press', async () => {
    await browser.url('http://zero.webappsecurity.com/index.html');
    const searchInput = await $('#searchTerm');

    await searchInput.waitForDisplayed();
    await searchInput.setValue('hello');
    await browser.keys('Enter');

    const result = await $('h2*=Search');
    await expect(result).toBeExisting();
    await expect(result).toHaveText('Search Results:');
  });
});
