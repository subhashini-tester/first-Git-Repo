import { Page } from '@playwright/test';
import { checkoutLocators } from '../locators/sauce_locators';

export class sauceCheckout {
	constructor(private page: Page) {}

	async fillCheckout(firstName: string, lastName: string, postal: string) {
		await this.page.fill(checkoutLocators.firstNameInput, firstName);
		await this.page.fill(checkoutLocators.LastNameInput, lastName);
		await this.page.fill(checkoutLocators.postalCode, postal);
	}

	async clickContinue() {
		await this.page.click(checkoutLocators.continueButton);
	}
}
