const { defineStep } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/LoginPage');
const HomePage = require('../pageobjects/HomePage');

defineStep(/^I am on the login page$/, async () => {
  await LoginPage.visit();
});

defineStep(/^I am on the home page$/, async () => {
  await HomePage.visit();
});

defineStep(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

defineStep(/^I login with invalid credentials$/, async () => {
  await LoginPage.login('test', 'test');
});

defineStep(/^I search for "([^"]*)"$/, async (searchQuery) => {
  await HomePage.searchFor(searchQuery);
});

defineStep(/^I should see an error message$/, async () => {
  await LoginPage.assertErrorMessage();
});

defineStep(/^I should see the results$/, async () => {
  const selector = await $('h2');
  await selector.waitForDisplayed();
  await expect(selector).toHaveTextContaining('Search Results:');
});
