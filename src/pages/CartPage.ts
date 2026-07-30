import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { WaitUtils } from "../utils/WaitUtils";

export class CartPage extends BasePage{

    readonly cartButtonLocator: Locator;
    readonly emailAddressSubscribeInputLocator: Locator;
    readonly successMessageLocator: Locator;
    readonly subscribeButtonLocator: Locator;


    constructor(page: Page) {
    super(page);
    this.cartButtonLocator = page.locator(" //a[normalize-space()='Cart']/..//i[@class='fa fa-shopping-cart']");  
    this.emailAddressSubscribeInputLocator = page.locator("#susbscribe_email");
    this.successMessageLocator = page.locator("//div[@id='success-subscribe']/child::div");
    this.subscribeButtonLocator = page.locator("//i[@class='fa fa-arrow-circle-o-right']");  

    


}
}