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

  it.only('should overwrite original pause command', async () => {
    await browser.pause(5000);
  });
});
