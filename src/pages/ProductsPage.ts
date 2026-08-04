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
    readonly writeYourReviewLocator:Locator;
    readonly writeYourReviewNameLocator:Locator;
    readonly writeYourReviewEmailLocator:Locator;
    readonly writeYourReviewMessageLocator:Locator;
    readonly writeYourReviewSubmitButtonLocator:Locator;
    readonly writeYourReviewSuccessMessageLocator:Locator;
    readonly addToCartButtonLocator:Locator;
    readonly continueShoppingButtonLocator:Locator;

    constructor(page: Page) {
        super(page);

        this.productsButtonLocator = page.locator('a[href="/products"]').first();

        this.allProductsLocator = page.locator("//h2[text()='All Products']");
        this.searchInputLocator = page.locator("//input[@id='search_product']");
        this.searchButtonLocator = page.locator("//button[@id='submit_search']");
        this.searchedProductsLocator = page.locator("//h2[text()='Searched Products']");
        this.productNamesLocator = page.locator("//div[@class='productinfo text-center']/p[1]");
        this.writeYourReviewLocator = page.locator("//a[@href='#reviews']");

        this.writeYourReviewNameLocator = page.locator("#name");
        this.writeYourReviewEmailLocator = page.locator("#email");
        this.writeYourReviewMessageLocator = page.locator("#review");
        this.writeYourReviewSubmitButtonLocator = page.locator("#button-review");
        this.writeYourReviewSuccessMessageLocator=page.locator("//div[@id='review-section']/div/div/span");
        this.addToCartButtonLocator=page.locator("//button[@class='btn btn-default cart']");
        this.continueShoppingButtonLocator=page.locator("//button[@class='btn btn-success close-modal btn-block']");

}
    
    viewProductWithProductName(productName: string): Locator {
        return this.page.locator(
            `//p[text()='${productName}']/parent::*/parent::*/parent::*//a[contains(@href,'/product_details')]`
        );
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

    }

    /*
    * Summary : Verifies that one or more products are displayed for the searched product.
    * Author  : Stimna
    */
    async verifySearchResults() {

        const count = await this.productNamesLocator.count();

        expect(count, "No products related to the searched product are displayed.").toBeGreaterThan(0);

    }

    /*
    * Summary :Method to add review
    * Author  : Sooraj
    */
    async addReview(name:string,email:string,message:string){
        await this.fill(this.writeYourReviewNameLocator,name);
        await this.fill(this.writeYourReviewEmailLocator,email);
        await this.fill(this.writeYourReviewMessageLocator,message);
        await this.click(this.writeYourReviewSubmitButtonLocator);
    }




}