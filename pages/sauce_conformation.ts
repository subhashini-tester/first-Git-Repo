import { Page } from '@playwright/test';
import { confirmationLocators } from '../locators/sauce_locators';

export class sauceConformation {
	constructor(private page: Page) {}

	async getConfirmationHeader() {
		return this.page.locator(confirmationLocators.confirmationHeader).innerText();
	}

	async getConfirmationText() {
		return this.page.locator(confirmationLocators.confirmationText).innerText();
	}
}
