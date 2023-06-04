describe('Order Products', () => {
  before(async () => {
    await browser.url('https://www.saucedemo.com/');
    await browser.sauceLogin();
  });

  after(async () => {
    await browser.sauceLogout();
  });

  it('should complete product order', async () => {
    await $('#inventory_container').waitForDisplayed();
    await $('button[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await $('button[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await $('.shopping_cart_link').click();

    await $('.cart_list').waitForDisplayed();
    await $('button*=Checkout').click();

    await $('.checkout_info_wrapper').$('form').waitForDisplayed();
    await $('input[data-test="firstName"]').setValue('test');
    await $('input[data-test="lastName"]').setValue('test');
    await $('input[data-test="postalCode"]').setValue('110001');
    await $('input[data-test="continue"]').click();

    await $('.cart_list').waitForDisplayed();
    await $('.summary_info').waitForDisplayed();
    await $('button*=Finish').click();

    await $('#checkout_complete_container').waitForDisplayed();
    await $('button*=Back').waitForDisplayed();
    const completeOrderHeader = await $('h2*=Thank');
    await expect(completeOrderHeader).toHaveText('Thank you for your order!');
  });
});
