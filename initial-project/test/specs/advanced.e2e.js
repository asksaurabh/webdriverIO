describe('Advanced Testing', () => {
  it('should test file upload', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload');

    const filePath =
      '/Users/saurabhkumar/Saurabh/courses/automation-webdriverIO/initial-project/my-body.png';
    const remoteFilePath = await browser.uploadFile(filePath);

    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click();
    await browser.pause(2000);
  });
});
