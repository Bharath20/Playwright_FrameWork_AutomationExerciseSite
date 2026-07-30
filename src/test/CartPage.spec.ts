import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginData } from "../data/loginData";
import { Login, TestData } from "../models/login";
import { BasePage } from "../pages/BasePage";
import { CartPage } from "../pages/CartPage";


 /*
 * Test Case ID : TC11
 * Test Summary : Verify Subscription in Cart page
 * Module       : Cart
 * Author       : Sooraj 
 */
  test("TC11_Verify Subscription in Cart page", async ({page}) => {
    const loginData: Login = LoginData.getLoginDetails();
    const homePage = new HomePage(page);
    const basePage=new BasePage(page);
    const cartPage=new CartPage(page);


    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    await homePage.navigate();
    await homePage.closeAdvertisement();

    //3. Verify that home page is visible successfully
    await expect(page,"Home Page is not displayed").toHaveTitle('Automation Exercise');
    await homePage.login(loginData.email,loginData.password);

    //4. Click 'Cart' button
    //5. Scroll down to footer
    await basePage.click(cartPage.cartButtonLocator);

    //6. Verify text 'SUBSCRIPTION'
    await expect(page.locator('h2').first(),"Text 'Subscription' not displayed").toHaveText('Subscription');

    //7. Enter email address in input and click arrow button
    await basePage.fill(cartPage.emailAddressSubscribeInputLocator,loginData.email);
    await basePage.click(cartPage.subscribeButtonLocator);

    //8. Verify success message 'You have been successfully subscribed!' is visible
    //await expect(page.locator(cartPage.successMessageLocator),"success message not displayed").toHaveText("You have been successfully subscribed!");
    await basePage.waitForElement(cartPage.successMessageLocator);
    await basePage.verifyText(cartPage.successMessageLocator,"You have been successfully subscribed!","'You have been successfully subscribed!success' message not displayed");
  });

