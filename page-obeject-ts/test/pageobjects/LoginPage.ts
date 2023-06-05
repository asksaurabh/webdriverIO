import AbstractPage from './AbstractPage';

class LoginPage extends AbstractPage {
  public get loginForm() {
    return $('#login_form');
  }
  public get loginInput() {
    return $('#user_login');
  }
  public get passwordInput() {
    return $('#user_password');
  }
  public get rememberMeCheckbox() {
    return $('#user_remember_me');
  }
  public get submitButton() {
    return $('input[type="submit"]');
  }
  public get errorMessage() {
    return $('.alert-error');
  }

  public async assertLoginPageIsVisible() {
    await this.loginForm.waitForDisplayed();
  }

  public async login(username: string, password: string) {
    (await this.loginInput).setValue(username);
    (await this.passwordInput).setValue(password);
    (await this.rememberMeCheckbox).click();
    (await this.submitButton).click();
  }

  public async assertLoginPageError() {
    (await this.errorMessage).waitForDisplayed();
    await expect(this.errorMessage).toHaveTextContaining(
      'Login and/or password are wrong.'
    );
  }
}

export default new LoginPage();
