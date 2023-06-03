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
});
