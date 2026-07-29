import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {

    readonly allProductsLocator: Locator;
    readonly searchInputLocator: Locator;
    readonly searchButtonLocator: Locator;
    readonly searchedProductsLocator: Locator;
    readonly productNamesLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.allProductsLocator = page.locator("//h2[text()='All Products']");
        this.searchInputLocator = page.locator("//input[@id='search_product']");
        this.searchButtonLocator = page.locator("//button[@id='submit_search']");
        this.searchedProductsLocator = page.locator("//h2[text()='Searched Products']");
        this.productNamesLocator = page.locator("//div[@class='productinfo text-center']/p[1]");
    }

    async verifyAllProductsPage() {
        await expect(this.allProductsLocator).toBeVisible();
    }

    async searchProduct(productName: string) {
        await this.fill(this.searchInputLocator, productName);
        await this.click(this.searchButtonLocator);
    }

    async verifySearchedProductsVisible() {
        await expect(this.searchedProductsLocator).toBeVisible();
    }

    async verifySearchResults() {
    const count = await this.productNamesLocator.count();
    expect(count).toBeGreaterThan(0);

    console.log(`Number of products found: ${count}`);
}
   
    
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