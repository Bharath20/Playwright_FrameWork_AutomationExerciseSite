import path from "path";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductsData } from "../data/ProductsData";


/*
 * Test Case ID : TCO9 
 * Test Summary : Verify that user can search a product
 * Module       : Products
 * Author       : Stimna 
 */
test("TCO9_Search Product", async ({ page }) => {

    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productData = ProductsData.getProductDetails();

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    await homePage.navigate();
    await homePage.closeAdvertisement();
    await homePage.verifyHomePageLoaded();
    //Click on 'Products' button
    //Verify user is navigated to ALL PRODUCTS page successfully
    await homePage.clickProducts();
    await productsPage.verifyAllProductsPage();

    // 6. Enter product name in search input and click search button
    // 7. Verify 'SEARCHED PRODUCTS' is visible
    // 8. Verify all the products related to search are visible
    await productsPage.searchProduct(productData.productName);
    await productsPage.verifySearchedProductsVisible();
    await productsPage.verifySearchResults();

});


