import { test, expect } from '@playwright/test';
import { SauceLogin } from '../pages/sauce_login';
import { sauceInventory } from '../pages/sauce_inventory';
import { sauceCart } from '../pages/sauce_cart';
import { sauceCheckout } from '../pages/sauce_checkout';
import { sauceFinishOrder } from '../pages/sauce-finishOrder';
import { sauceConformation } from '../pages/sauce_conformation';

test('complete purchase flow on Sauce Demo', async ({ page }) => {
	const login = new SauceLogin(page);
	await page.goto('https://www.saucedemo.com/');
	await login.login('standard_user', 'secret_sauce');

	const inventory = new sauceInventory(page);
	await inventory.addBackpackToCart();
	await inventory.addTshirtToCart();
	await inventory.clickOnCartButton();

	const cart = new sauceCart(page);
	await cart.clickonCheckoutButton();

	const checkout = new sauceCheckout(page);
	await checkout.fillCheckout('subha', 'shini', '123456');
	await checkout.clickContinue();

	const finish = new sauceFinishOrder(page);
	await finish.clickFinish();

	const conf = new sauceConformation(page);
	const header = await conf.getConfirmationHeader();
	expect(header.toUpperCase()).toContain('THANK YOU');
});
