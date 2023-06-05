const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/LoginPage');

Given(/^I am on the login page$/, async () => {
  await LoginPage.visit();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When(/^I login with invalid credentials$/, async () => {
  await LoginPage.login('test', 'test');
});

Then(/^I should see an error message$/, async () => {
  await LoginPage.assertErrorMessage();
});
