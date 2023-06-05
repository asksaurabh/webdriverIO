const { defineStep } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/LoginPage');

defineStep(/^I am on the login page$/, async () => {
  await LoginPage.visit();
});

defineStep(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

defineStep(/^I login with invalid credentials$/, async () => {
  await LoginPage.login('test', 'test');
});

defineStep(/^I should see an error message$/, async () => {
  await LoginPage.assertErrorMessage();
});
