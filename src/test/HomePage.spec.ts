import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SubscriptionData } from "../data/SubscriptionData";
import { BasePage } from "../pages/BasePage";


/*
 * Test Case ID : TC10
 * Test Summary : Verify Subscription in home page
 * Module       : Home
 * Author       : Stimna
 */
test("TC10_Verify Subscription in home page", async ({ page }) => {
    const homePage = new HomePage(page);
    const subscriptionData = SubscriptionData.TC10_getSubscriptionDetails();

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
    await homePage.navigate();
//3. Verify that home page is visible successfully
    await homePage.verifyHomePageLoaded();
    await homePage.closeAdvertisement();
// 4. Scroll down to footer    
    await homePage.scrollToBottom();
//5. Verify text 'SUBSCRIPTION'
    await homePage.verifySubscriptionSection();
//6. Enter email address in input and click arrow button    
    await homePage.enterSubscriptionEmail(subscriptionData.email);
    await homePage.clickSubscribe();
//7. Verify success message 'You have been successfully subscribed!' is visible    
    await homePage.verifySubscriptionSuccessMessage();

});

/*

Test Case ID : TC25
Test Summary : Verify Scroll Up using Arrow button and Scroll Down functionality.
Module : Home Page
Author : Stimna Antony

*/

test("TC25_Verify Scroll Up using Arrow button", async ({ page }) => {

    const homePage = new HomePage(page);

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    await homePage.navigate();
    // 3. Verify that home page is visible successfully
    await homePage.verifyHomePageLoaded();
    // 4. Scroll down page to bottom
    await homePage.scrollToBottom();
    // 5. Verify 'SUBSCRIPTION' is visible
    await homePage.verifySubscriptionSection();
    // 6. Click on arrow at bottom right side to move upward
    await homePage.clickScrollUpArrow();
    //  7. Verify that page is scrolled up and full Fledged practice website for Automation Engineers text is visible on screen
    await homePage.verifyScrolledToTop();

});


/*
 * Test Case ID : TC26 
 * Test Summary : Verify Scroll Up without 'Arrow' button and Scroll Down functionality
 * Module       : HomePage
 * Author       : Sooraj 
 */
  test("TC26_Verify Scroll Up without 'Arrow' button and Scroll Down functionality", async ({page}) => {
    const homePage = new HomePage(page);
    const basePage=new BasePage(page);
    
    //1. Launch browser
    ///2. Navigate to url 'http://automationexercise.com'
    await homePage.navigate();
    await homePage.closeAdvertisement();

    //3. Verify that home page is visible successfully
    await homePage.verifyHomePageLoaded();

    //4. Scroll down page to bottom
    basePage.scrollToBottom();

    //5. Verify 'SUBSCRIPTION' is visible
    basePage.verifyText(homePage.homePageSubscribeHeadingLocator,"Subscription","Text 'Subscription' not displayed");
    
    //6. Scroll up page to top
    basePage.scrollToTop();

    //7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
    await expect(page.locator('h2').first(),"Full-Fledged practice website for Automation Engineers! message is not displayed").toHaveText('Full-Fledged practice website for Automation Engineers');
}
);
