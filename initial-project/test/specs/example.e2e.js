describe('My first test suite', () => {
  it.skip('My first test case', async () => {
    let myUrl = 'https://www.example.com';

    await browser.url(myUrl);
    await browser.pause(2000);

    await browser.url('https://www.google.com');
    await browser.pause(2000);
  });

  it.skip('should assert browser title and url', async () => {
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

  it.skip('should assert web elements', async () => {
    await browser.url('https://www.example.com');
    await browser.pause(2000);

    const pageElement = await $('h1');
    await expect(pageElement).toExist();
    await expect(pageElement).toBeDisplayed();
    await expect(pageElement).toHaveTextContaining('Domain');
    await expect(pageElement).toHaveText('Example Domain');
  });

  it.skip('should test form and input elements', async () => {
    await browser.url('https://www.saucedemo.com/');

    let usernameInput = await $('#user-name');
    let passwordInput = await $('#password');
    let loginButton = await $('input[data-test="login-button"]');

    await usernameInput.setValue('standard_user');
    await passwordInput.setValue('secret_sauce');
    await loginButton.click();

    await expect(await $('#inventory_container')).toBeDisplayed();
  });

  it.skip('should select selectboxes and radioboxes', async () => {
    await browser.url('https://devexpress.github.io/testcafe/example/');

    const selectBox = await $('#preferred-interface');
    selectBox.selectByVisibleText('JavaScript API');

    const option = await $('option=JavaScript API');
    await expect(option).toBeSelected();

    const radioElement = await $('input[data-testid="windows-radio"]');
    await radioElement.click();
  });

  it.skip('should set window size', async () => {
    await browser.setWindowSize(800, 600);
    await browser.url('https://www.example.com');
    await browser.pause(2000);
  });

  it('should wait for dynamic content', async () => {
    await browser.url('https://devexpress.github.io/testcafe/example/');

    const commentsBox = await $('textarea[data-testid="comments-area"]');
    expect(commentsBox).toBeDisabled();

    const checkBox = await $('input[data-testid="tried-testcafe-checkbox"]');
    await checkBox.click();

    // Check documentation for examples of waitForEnabled(), waitForClickable() etc...
    await commentsBox.waitForEnabled();
    expect(commentsBox).toBeEnabled();
  });
});
