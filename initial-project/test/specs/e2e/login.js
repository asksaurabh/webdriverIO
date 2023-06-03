describe('Login flow', () => {
  beforeEach(async () => {
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
});
