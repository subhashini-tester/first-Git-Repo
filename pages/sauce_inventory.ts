import {Page} from '@playwright/test';
import{inventoryLocators} from '../locators/sauce_locators';
export class sauceInventory{
    constructor(private page:Page){}
    async addBackpackToCart(){
        await this.page.locator(inventoryLocators.backpack).click();
};
async addTshirtToCart(){
    await this.page.locator(inventoryLocators.tshirt).click();
};
async addOnesieToCart(){
    await this.page.locator(inventoryLocators.onesie).click();
};
async addBikeLightToCart(){
    await this.page.locator(inventoryLocators.bikeLight).click();
};
async addJacketToCart(){
    await this.page.locator(inventoryLocators.jacket).click();
};
async clickOnRedTshirt(){
    await this.page.locator(inventoryLocators.red_tshirt).click();
};
async clickOnCartButton(){
    await this.page.locator(inventoryLocators.cartButton).click();
}
}       