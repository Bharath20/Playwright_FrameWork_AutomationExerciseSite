import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { ProductsData } from "../data/ProductsData";

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

    /*
 * Summary : Opens the Products page.
 * Author  : Stimna
 */
    async openProductsPage(): Promise<void> {
        await this.click(this.productsButtonLocator);
    }

    /*
 * Summary : Verifies that the ALL PRODUCTS page is displayed successfully.
 * Author  : Stimna
 */
    async verifyAllProductsPage() {
        await this.verifyVisible(this.allProductsLocator, "ALL PRODUCTS page is not displayed successfully.");
        console.log("ALL PRODUCTS page is displayed successfully.");
    }

    /*
   * Summary : Searches for the specified product.
   * @param productName - Name of the product to search.
   * Author  : Stimna
   */
    async searchProduct(productName: string) {
        await this.fill(this.searchInputLocator, productName);
        await this.click(this.searchButtonLocator);

        console.log(`Searched for product: ${productName}`);
    }

    /*
     * Summary : Verifies that the SEARCHED PRODUCTS heading is displayed.
     * Author  : Stimna
     */
    async verifySearchedProductsVisible() {
        await this.verifyVisible(this.searchedProductsLocator, "SEARCHED PRODUCTS heading is not displayed."
        );

        console.log("SEARCHED PRODUCTS heading is displayed successfully.");
    }

    /*
   * Summary : Verifies that one or more products are displayed for the searched product.
   * Author  : Stimna
   */
    async verifySearchResults() {

        const count = await this.productNamesLocator.count();

        expect(count, "No products related to the searched product are displayed.").toBeGreaterThan(0);

        console.log(`Verified ${count} searched products.`);
    }

}