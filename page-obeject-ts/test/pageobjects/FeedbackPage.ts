import AbstractPage from './AbstractPage';

class FeedbackPage extends AbstractPage {
  public get feedbackForm() {
    return $('form');
  }
  public get nameInput() {
    return $('#name');
  }
  public get emailInput() {
    return $('#email');
  }
  public get subjectInput() {
    return $('#subject');
  }
  public get commentBox() {
    return $('#comment');
  }
  public get submitButton() {
    return $('input[type="submit"]');
  }
  public get feedbackSubmissionMessage() {
    return $('.span6');
  }

  public async assertFeedbackFormIsVisible() {
    (await this.feedbackForm).waitForDisplayed();
  }

  public async submitFeedbackForm(
    name: string,
    email: string,
    subject: string,
    comment: string
  ) {
    (await this.nameInput).setValue(name);
    (await this.emailInput).setValue(email);
    (await this.subjectInput).setValue(subject);
    (await this.commentBox).setValue(comment);
    (await this.submitButton).waitForClickable();
    (await this.submitButton).click();
  }

  public async assertSuccessfulFeedbackFormSubmission() {
    (await this.feedbackSubmissionMessage).waitForDisplayed();
    await expect(this.feedbackSubmissionMessage).toHaveTextContaining(
      'Thank you for your comments'
    );
  }
}

export default new FeedbackPage();
