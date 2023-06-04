class HomePage {
  public get signInButton() {
    return $('#signin_button');
  }

  public async visit() {
    await browser.url('http://zero.webappsecurity.com/');
  }

  public async clickOnSignIn() {
    await this.signInButton.click();
  }
}

export default new HomePage();
