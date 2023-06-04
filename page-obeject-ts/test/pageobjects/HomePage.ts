class HomePage {
  public async visit() {
    await browser.url('http://zero.webappsecurity.com/');
  }
}

export default new HomePage();
