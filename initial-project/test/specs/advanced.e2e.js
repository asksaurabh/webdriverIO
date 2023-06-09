describe('Advanced Testing', () => {
  beforeEach(async () => {
    await browser.url('https://the-internet.herokuapp.com/upload');
  });

  it('should test file upload 1', async () => {
    const filePath = './my-body.png';
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit');
    await browser.pause(2000);
  });

  it('should test file upload 2', async () => {
    const filePath = './whole-screenshot.png';
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit');
    await browser.pause(2000);
  });

  it('should test file upload 3', async () => {
    const filePath = './my-div.png';
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit');
    await browser.pause(2000);
  });

  it('should get title and url and wait to click submit', async () => {
    const { title, url } = await browser.getTitleAndUrl();
    expect(title).toBe('The Internet');
    expect(url).toBe('https://the-internet.herokuapp.com/upload');

    await browser.waitAndClick('#file-submit');
    await browser.pause(2000);

    const errorEl = await $('h1');
    expect(errorEl).toHaveText('Internal Server Error');
  });

  it('should overwrite original pause command', async () => {
    await browser.pause(5000);
  });

  it('should change browser session', async () => {
    console.log('SESSION ID before RELOAD: ' + browser.sessionId);
    await browser.reloadSession();
    console.log('SESSION ID after RELOAD: ' + browser.sessionId);
  });

  it('should create and switch new window tabs', async () => {
    await browser.url('https://www.google.com');
    await browser.newWindow('https://www.gmail.com');
    await browser.pause(5000);
    await browser.switchWindow('google.com');
    await browser.pause(2000);
  });

  it('Network throttle', async () => {
    await browser.throttle('Regular3G');
    await browser.url('https://www.google.com');
    await browser.pause(5000);

    await browser.throttle('Regular4G');
    await browser.url('https://www.google.com');
    await browser.pause(5000);

    await browser.throttle('offline');
    await browser.url('https://www.google.com');
    await browser.pause(5000);
  });

  it('execute JS code - sync', async () => {
    const result = await browser.execute(
      (a, b) => {
        return a + b;
      },
      5,
      10
    );

    await expect(result).toBe(15);
  });

  it.only('execute async JS code', async () => {
    const result = await browser.executeAsync(
      (a, b, done) => {
        setTimeout(() => {
          done(a + b);
        }, 3000);
      },
      5,
      10
    );

    await expect(result).toBe(15);
  });
});
