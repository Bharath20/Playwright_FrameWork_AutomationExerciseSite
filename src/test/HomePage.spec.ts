import path from "path";

import path from "path";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SubscriptionData } from "../data/SubscriptionData";

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

