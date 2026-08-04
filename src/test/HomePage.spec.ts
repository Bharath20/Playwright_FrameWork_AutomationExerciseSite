import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { BasePage } from "../pages/BasePage";


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
