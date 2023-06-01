describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await browser.url(`https://the-internet.herokuapp.com/login`);

    await $('#username').setValue('tomsmith');
    await $('#password').setValue('SuperSecretPassword!');
    await $('button[type="submit"]').click();

    // Wait for 1 second
    await browser.pause(1000);
    await expect($('#flash')).toBeExisting();
    await expect($('#flash')).toHaveTextContaining(
      'You logged into a secure area!'
    );
    await browser.pause(1000);
  });
});
