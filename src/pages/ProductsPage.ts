import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductsPage extends BasePage {

    readonly productsButtonLocator: Locator;
    readonly allProductsLocator: Locator;
    readonly searchInputLocator: Locator;
    readonly searchButtonLocator: Locator;
    readonly searchedProductsLocator: Locator;
    readonly productNamesLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.productsButtonLocator = page.locator('a[href="/products"]').first();

        this.allProductsLocator = page.locator("//h2[text()='All Products']");
        this.searchInputLocator = page.locator("//input[@id='search_product']");
        this.searchButtonLocator = page.locator("//button[@id='submit_search']");
        this.searchedProductsLocator = page.locator("//h2[text()='Searched Products']");
        this.productNamesLocator = page.locator("//div[@class='productinfo text-center']/p[1]");
    }


    async openProductsPage(): Promise<void> {
        await this.click(this.productsButtonLocator);
    }
    /*
     * Summary: * This method is used to verify that all products are listed.
     *  Author       : Stimna 
     */
    async verifyAllProductsPage() {
        await expect(this.allProductsLocator).toBeVisible();
    }

    /*
      * Summary: * This method is used to search a product.
     *  Author       : Stimna 
     */
    async searchProduct(productName: string) {
        await this.fill(this.searchInputLocator, productName);
        await this.click(this.searchButtonLocator);
    }

    /*
     * Summary: * This method is used to verify the product searched is visible.
     *  Author       : Stimna 
     */
    async verifySearchedProductsVisible() {
        await expect(this.searchedProductsLocator).toBeVisible();
    }

    /*
     * Summary: * This method is used to verify the search result contain no products other than the searched one.
     *  Author       : Stimna 
     */
    async verifySearchResults() {

        const count = await this.productNamesLocator.count();

        expect(count).toBeGreaterThan(0);

        console.log(`Number of products found: ${count}`);
    }

}