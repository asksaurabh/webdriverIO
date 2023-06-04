import HomePage from '../pageobjects/HomePage';
import LoginPage from '../pageobjects/LoginPage';

describe('Login test', () => {
  it('should not login with invalid username and password', async () => {
    await HomePage.visit();
    await HomePage.clickOnSignIn();
    await LoginPage.assertLoginPageIsVisible();
    await LoginPage.login('test', 'test');
    await LoginPage.assertLoginPageError();
  });
});
