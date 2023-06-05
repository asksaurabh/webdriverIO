export default class AbstractPage {
  public async waitForSeconds(seconds: number) {
    await browser.pause(seconds * 1000);
  }

  public async setFullHDResolution() {
    await browser.setWindowSize(1980, 1080);
  }

  public async setNetworkSpeedTo3G() {
    await browser.throttle('Regular3G');
  }

  public async takeScreenshot(saveToPath) {
    await browser.saveScreenshot(saveToPath);
  }
}
