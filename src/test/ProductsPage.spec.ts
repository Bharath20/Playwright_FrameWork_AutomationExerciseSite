import path from "path";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductsData } from "../data/ProductsData";
import { BasePage } from "../pages/BasePage";
import { LoginData } from "../data/loginData";
import { Login, TestData } from "../models/login";


/*
 * Test Case ID : TCO9 
 * Test Summary : Verify that user can search a product
 * Module       : Products
 * Author       : Stimna 
 */
test("TCO9_Search Product", async ({ page }) => {

    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productData = ProductsData.TC09_getProductDetails();

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


/*
 * Test Case ID : TC21
 * Test Summary : Verify Add review on product
 * Module       : Product
 * Author       : Sooraj 
 */
  test("TC21_Verify Add review on product", async ({page}) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productData = ProductsData.TC21_getProductDetails();
    const basePage=new BasePage(page);

    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    await homePage.navigate();
    await homePage.closeAdvertisement();

    //3. Click on 'Products' button
    await productsPage.openProductsPage();

    //4. Verify user is navigated to ALL PRODUCTS page successfully
    await productsPage.verifyAllProductsPage();

    //5. Click on 'View Product' button
    await productsPage.searchProduct(productData.productName);
    await productsPage.verifySearchedProductsVisible();
    await productsPage.viewProductWithProductName(productData.productName).click();

    //6. Verify 'Write Your Review' is visible
    await basePage.verifyText(productsPage.writeYourReviewLocator,"Write Your Review","'Write Your Review' section not displayed");
    
    //7. Enter name, email and review
    //8. Click 'Submit' button
    await productsPage.addReview(productData.name,productData.email,productData.message);
    await basePage.click(productsPage.writeYourReviewSubmitButtonLocator);

    //9. Verify success message 'Thank you for your review.'
    await basePage.waitForElement(productsPage.writeYourReviewSuccessMessageLocator);
    await basePage.verifyText(productsPage.writeYourReviewSuccessMessageLocator,"Thank you for your review.","'Thank you for your review.' message not displayed");

  });


