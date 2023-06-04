import HomePage from '../pageobjects/HomePage';
import LoginPage from '../pageobjects/LoginPage';
import FeedbackPage from '../pageobjects/FeedbackPage';

describe('Login test', () => {
  it('should not login with invalid username and password', async () => {
    await HomePage.visit();
    await HomePage.clickOnSignIn();
    await LoginPage.assertLoginPageIsVisible();
    await LoginPage.login('test', 'test');
    await LoginPage.assertLoginPageError();
  });
});

describe.only('Feedback test', () => {
  it('should submit the feedback form', async () => {
    await HomePage.visit();
    await HomePage.clickOnFeedbackLink();
    await FeedbackPage.assertFeedbackFormIsVisible();
    await FeedbackPage.submitFeedbackForm(
      'test',
      'test@test.com',
      'test subject',
      'This is an automated test'
    );
    await FeedbackPage.assertSuccessfulFeedbackFormSubmission();
  });
});
