import { expect, Locator, Page } from '@playwright/test';
import { WaitUtils } from "../utils/WaitUtils";

export class BasePage {

    constructor(public page: Page) { }


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


    // Click on an element
    async click(locator: Locator): Promise<void> {
        
        await this.closeAdvertisementIfPresent();
        await WaitUtils.waitForVisible(locator);
        await locator.click();
    }


    // Enter text into a textbox
    async fill(locator: Locator, value: string): Promise<void> {

        await this.closeAdvertisementIfPresent();
        await WaitUtils.waitForVisible(locator);
        await locator.fill(value);
    }


    // Get text from an element
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

    async verifyText(locator: Locator,expectedText: string, message?: string): Promise<void> {

     await this.closeAdvertisementIfPresent();
     await expect(locator,message).toContainText(expectedText);
   }


    // Check whether an element is visible
    async isVisible(locator: Locator): Promise<boolean> {

        await this.closeAdvertisementIfPresent();
        
        return await locator.isVisible();
    }


    // Wait for an element to be visible
    async waitForElement(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();

        await locator.waitFor({
            state: "visible"
        });
    }


    // Navigate to URL
    async navigateTo(url: string): Promise<void> {

        await this.page.goto(url);

    }


    // Scroll to an element
    async scrollIntoView(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.scrollIntoViewIfNeeded();

    }


    // Hover over an element
    async hover(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.hover();

    }


    // Select dropdown option
    async selectDropdownOption(locator: Locator, value: string): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.selectOption(value);

    }


    // Check checkbox
    async check(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.check();

    }


    // Uncheck checkbox
    async uncheck(locator: Locator): Promise<void> {

        await this.closeAdvertisementIfPresent();
         await WaitUtils.waitForVisible(locator);
        await locator.uncheck();

    }

}