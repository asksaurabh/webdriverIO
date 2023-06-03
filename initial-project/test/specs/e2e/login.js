describe('Login flow', () => {
  before(async () => {
    await browser.url('http://zero.webappsecurity.com/');
  });

  it('should not login with invalid username and password', async () => {
    const signInButton = await $('button=Signin');
    await browser.waitAndClick(signInButton);

    await $('#login_form').waitForDisplayed();
    await $('#user_login').setValue('test');
    await $('#user_password').setValue('test');
    await $('#user_remember_me').click();
    await $('input[type="submit"]').click();

    const alertMessage = await $('.alert-error');
    await expect(alertMessage).toHaveText('Login and/or password are wrong.');
  });

  it('should test reset password functionality', async () => {
    const email = 'test@test.com';

    await browser.waitAndClick('*=Forgot');
    await $('#user_email').waitForDisplayed();
    await $('#user_email').setValue(email);
    await $('input[type="submit"]').click();

    const forgottenPasswordMessage = await $('.span6');
    await expect(forgottenPasswordMessage).toHaveTextContaining(
      `email: ${email}`
    );
  });
});
