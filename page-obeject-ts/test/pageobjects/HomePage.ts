class HomePage {
  public get feedbackLink() {
    return $('#feedback');
  }

  public async visit() {
    await browser.url('http://zero.webappsecurity.com/');
  }

  public async clickOnFeedbackLink() {
    (await this.feedbackLink).click();
  }
}

export default new HomePage();
