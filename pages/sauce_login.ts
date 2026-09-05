import { Page } from '@playwright/test';
import { loginLocators } from '../locators/sauce_locators';


export class SauceLogin {

    constructor(private page: Page) {}
    async login(username: string, password: string) {
        await this.page.fill(loginLocators.usernameInput, username);
        await this.page.fill(loginLocators.passwordInput, password);
        await this.page.click(loginLocators.loginButton);
    }

}