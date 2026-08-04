import path from "path";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductsData } from "../data/ProductsData";
import { BasePage } from "../pages/BasePage";
import { LoginData } from "../data/loginData";
import { CartData } from "../data/cartData";
import { Login, TestData } from "../models/login";
import { CartPage } from "../pages/CartPage";



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

  /*
 * Test Case ID : TC16
 * Test Summary : Verify Place Order: Login before Checkout
 * Module       : Product
 * Author       : Sooraj 
 */
  test("TC16_Verify Place Order: Login before Checkout", async ({page}) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productData = ProductsData.TC21_getProductDetails();
    const basePage=new BasePage(page);
    const testData:TestData=LoginData.TC16_getTestDataForUserCreation();
    const cartPage=new CartPage(page);
    const cartData=CartData.TC16_getAddressData(); 
    const cartPaymentData=CartData.TC16_getPaymentDetailsData();


    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    await homePage.navigate();
    await homePage.closeAdvertisement();

    //3. Verify that home page is visible successfully
    await homePage.verifyHomePageLoaded();


  //Creating a new user and with the created user login functionility will be verified
    await homePage.signUp(testData.name, testData.email);
    await homePage.accountInformationCreation(testData.password,testData.dayValue,testData.monthValue,testData.yearValue);
    await homePage.addressInformationCreation(testData.firstName,testData.lastName,testData.address,testData.countryValue,testData.state,testData.city,testData.zipcode,testData.mobile);
    await basePage.click(homePage.signUpContinueBtnLocator);
    await basePage.click(homePage.logoutButtonLocator);

    //4. Click 'Signup / Login' button
    await basePage.click(homePage.signUpOrLoginButtonLocator);

    //5. Fill email, password and click 'Login' button
    await homePage.login(testData.email,testData.password);

    //6. Verify 'Logged in as username' at top
    await homePage.verifyLoggedInUser(testData.name);

    //7. Add products to cart
    await productsPage.openProductsPage();
    await productsPage.searchProduct(productData.productName);
    await productsPage.verifySearchedProductsVisible();
    await productsPage.viewProductWithProductName(productData.productName).click();
    await basePage.click(productsPage.addToCartButtonLocator);
    await basePage.click(productsPage.continueShoppingButtonLocator);

    //8. Click 'Cart' button
    await basePage.click(cartPage.cartButtonLocator);

    //9. Verify that cart page is displayed
    await basePage.verifyVisible(cartPage.cartPageLocator,"Cart Page is not displayed");

    //10. Click Proceed To Checkout
    await basePage.click(cartPage.proceedToCheckout);

    //11. Verify Address Details and Review Your Order
    await cartPage.VerifyAddressDetails(cartData.name,cartData.address,cartData.cityStatePostalCode,cartData.country,cartData.phone);

    //12. Enter description in comment text area and click 'Place Order'
    await cartPage.addCommentsAndPlaceOrder("This is a test comment");

    //13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
    //14. Click 'Pay and Confirm Order' button

    await cartPage.addCardDetails(cartPaymentData.nameOnCard,cartPaymentData.cardNumber,cartPaymentData.cvc,cartPaymentData.expirationDate,cartPaymentData.year);

    //15. Verify success message 'Your order has been placed successfully!'
    await expect(page.locator('h2').first(),"Order Placed! message is not displayed").toHaveText('Order Placed!');

    //16. Click 'Delete Account' button
    await homePage.deleteAccount();

    //17. Verify that 'ACCOUNT DELETED!' is visible
    await expect(page.locator('h2').first(),"Account Deleted! message not displayed").toHaveText('Account Deleted!');
    await basePage.click(homePage.signUpContinueBtnLocator);

  });


