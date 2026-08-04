import { expect, Locator, Page } from '@playwright/test';
import { WaitUtils } from "../utils/WaitUtils";

export class BasePage {

    constructor(public page: Page) { }


  /*
  * Summary: * This method is used to handle advertisement.
  * Author       : Sooraj 
  */
    // Common Advertisement Handling
    async closeAdvertisementIfPresent(): Promise<void> {

        const closeButton = this.page.getByText("Close");

        try {

            if (await closeButton.isVisible({ timeout: 2000 })) {

                await closeButton.click();
                console.log("Advertisement closed");

            }

        }
        catch {

            console.log("Advertisement not displayed");

        }
    }

    /* 
    *Summary:  This method is used to perform click actions with wait.
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async click(locator: Locator): Promise<void> {
        
        await this.closeAdvertisementIfPresent();
        await WaitUtils.waitForVisible(locator);
        await locator.click();
    }


    /* 
    *Summary:  This method is used to perform fill actions with wait.
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async fill(locator: Locator, value: string): Promise<void> {

        await this.closeAdvertisementIfPresent();
        await WaitUtils.waitForVisible(locator);
        await locator.fill(value);
    }

    /* 
    *Summary:  This method is used to Get text from an element.
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async getText(locator: Locator): Promise<string | null> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        return await locator.textContent();
    }


    // Verify text
    // async verifyText(locator: Locator, expectedText: string): Promise<void> {

    //     await this.closeAdvertisementIfPresent();

    //     await expect(locator)
    //         .toHaveText(expectedText);

    // }

    
    /* 
    *Summary:  This method is used to verify text attribute of a locator
    * @param locator - locator of the element.
    * @param expectedText - expected text to be verifie.
    * @param message - assertion message.
    * Author       : Sooraj 
    */
    async verifyText(locator: Locator,expectedText: string, message?: string): Promise<void> {

     await this.closeAdvertisementIfPresent();
     await expect(locator,message).toContainText(expectedText);
   }

    /* 
    *Summary:  This method is used to Check whether an element is visible
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async isVisible(locator: Locator): Promise<boolean> {

        await this.closeAdvertisementIfPresent();
        
        return await locator.isVisible();
    }

    /* 
    *Summary:  This method is used to Wait for an element to be visible
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async waitForElement(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();

        await locator.waitFor({
            state: "visible"
        });
    }

    /* 
    *Summary:  This method is used to Navigate to URL
    * @param url - url of the page to be navigated.
    * Author       : Sooraj 
    */
    async navigateTo(url: string): Promise<void> {

        await this.page.goto(url);

    }

    /* 
    *Summary:  This method is used to Scroll to an element
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async scrollIntoView(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.scrollIntoViewIfNeeded();

    }

    /* 
    *Summary:  This method is used to Hover over an element
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async hover(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.hover();

    }

    /* 
    *Summary:  This method is used to Select dropdown option
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async selectDropdownOption(locator: Locator, value: string): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.selectOption(value);

    }

    /* 
    *Summary:  This method is used to  Check checkbox
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async check(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.check();

    }

    /* 
    *Summary:  This method is used to  UnCheck checkbox
    * @param locator - locator of the element.
    * Author       : Sooraj 
    */
    async uncheck(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.uncheck();

    }
    
    /* 
    *Summary:  This method is used to verify visibility of a locator
    * @param locator - locator of the element.
    * @param errorMessage - error message to verify.
    * Author       : Sooraj 
    */
    async verifyVisible(locator: Locator, errorMessage: string) {
    await expect(locator, errorMessage).toBeVisible();
    }


    /* 
    *Summary:  This method is used to scroll to top.
    * Author       : Sooraj 
    */
    async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));

    }

        /* 
    *Summary:  This method is used to scroll to bottom.
    * Author       : Sooraj 
    */
    async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));


    }
    

}