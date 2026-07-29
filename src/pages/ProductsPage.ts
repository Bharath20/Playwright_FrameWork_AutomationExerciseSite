import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { WaitUtils } from "../utils/WaitUtils";



export class ProductsPage extends BasePage {
  
  readonly productsButtonLocator: Locator;
   
  
constructor(page: Page) {
    super(page);

    this.productsButtonLocator = page.locator('a[href="/products"]').first();

}

  async openProductsPage(): Promise<void> {
    console.log("test");
    //await WaitUtils.waitForVisible(this.productsButtonLocator);
    await this.click(this.productsButtonLocator);
  }


}