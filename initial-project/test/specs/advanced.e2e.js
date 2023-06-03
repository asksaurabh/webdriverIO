describe('Advanced Testing', () => {
  // beforeEach(async () => {
  //   await browser.url('https://the-internet.herokuapp.com/upload');
  // });

  beforeEach(async () => {
    await loadWebsite();
  });

  it('should test file upload 1', async () => {
    const filePath = './my-body.png';
    const remoteFilePath = await browser.uploadFile(filePath);

    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();
    await browser.pause(2000);
  });

  it('should test file upload 2', async () => {
    const filePath = './whole-screenshot.png';
    const remoteFilePath = await browser.uploadFile(filePath);

    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();

    await browser.pause(2000);
  });
});

async function loadWebsite() {
  await browser.url('https://the-internet.herokuapp.com/upload');
}
