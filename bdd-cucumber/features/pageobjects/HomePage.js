const AbstractPage = require('./AbstractPage');

class HomePage extends AbstractPage {
  get searchBox() {
    return $('#searchTerm');
  }

  async visit() {
    await browser.url('http://zero.webappsecurity.com/index.html');
  }

  async searchFor(searchQuery) {
    await this.searchBox.setValue(searchQuery);
    await browser.keys('Enter');
  }
}

module.exports = new HomePage();
