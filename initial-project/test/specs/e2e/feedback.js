describe.skip('Feedback form', () => {
  before(async () => {
    await browser.url('http://zero.webappsecurity.com/index.html');
  });
  it('should submit feedback form with all the values', async () => {
    const userName = 'John Doe';
    const userEmail = 'johndoe@gmail.com';
    const subject = 'Automation testing';
    const description =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro sed nesciunt voluptatibus est, qui sapiente accusantium corrupti debitis adipisci.';

    await browser.waitAndClick('#feedback');
    await $('form').waitForDisplayed();

    await $('#name').setValue(userName);
    await $('#email').setValue(userEmail);
    await $('#subject').setValue(subject);
    await $('#comment').setValue(description);

    await $('input[type="submit"]').click();

    const submissionMessage = await $('.span6');
    await submissionMessage.waitForDisplayed();
    await expect(submissionMessage).toHaveTextContaining(
      'Customer Service staff and given the full attention'
    );
    await expect(browser).toHaveUrlContaining('sendFeedback.html');
  });
});
