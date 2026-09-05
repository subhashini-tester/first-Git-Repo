import { Page } from '@playwright/test';
import { finishLocators } from '../locators/sauce_locators';

export class sauceFinishOrder {
	constructor(private page: Page) {}

	async clickFinish() {
		await this.page.click(finishLocators.finishButton);
	}
}
