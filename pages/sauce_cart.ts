import { Page } from "@playwright/test";
import{cartLocators} from '../locators/sauce_locators';
export class sauceCart{
    constructor(private page:Page){}
    async clickonCheckoutButton(){
        await this.page.locator(cartLocators.checkoutButton).click();
    }
}