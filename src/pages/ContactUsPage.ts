import { expect, Locator, Page } from '@playwright/test';
import { WaitUtils } from "../utils/WaitUtils";
import { BasePage } from "./BasePage";

export class ContactUsPage extends BasePage {
    readonly nameInputLocator: Locator;
    readonly emailInputLocator: Locator;
    readonly subjectInputLocator: Locator;
    readonly messageInputLocator: Locator;
    readonly uploadButtonLocator: Locator;
    readonly submitButtonLocator: Locator;
    readonly getInTouchTitleLocator: Locator;
    readonly homeButtonLocator: Locator;
    readonly successAlertLocator: Locator;
    private lastDialogMessage: string | null;

    constructor(page: Page) {
        super(page);
        this.nameInputLocator = page.locator("//input[@data-qa='name']");
        this.emailInputLocator = page.locator("//input[@data-qa='email']");
        this.subjectInputLocator = page.locator("//input[@data-qa='subject']");
        this.messageInputLocator = page.locator("//textarea[@data-qa='message']");
        this.uploadButtonLocator = page.locator("//input[@type='file']");
        this.submitButtonLocator = page.locator("//input[@data-qa='submit-button']");
        this.getInTouchTitleLocator = page.locator("//h2[contains(.,'Get In Touch')]");
        this.homeButtonLocator = page.locator("a:has-text('Home')").filter({ hasText: 'Home' }).filter({ has: page.locator('span') }).first();
        this.successAlertLocator = page.locator("div.status.alert.alert-success");
        this.lastDialogMessage = null;
    }
    /*Summary: This method verifies that the "Get In Touch" title is visible on the Contact Us page. 
     * Author       : Abhishek
     */
    async verifyGetInTouchVisible(): Promise<void> {
        await WaitUtils.waitForVisible(this.getInTouchTitleLocator);
        await expect(this.getInTouchTitleLocator).toBeVisible();
    }

    /*Summary: This method fills the contact form with the provided details.
     * @param name - name of the user.
     * @param email - email of the user.
     * @param subject - subject of the message.
     * @param message - the message content.
     * Author       : Abhishek
     */
    async fillContactForm(name: string, email: string, subject: string, message: string): Promise<void> {
        await this.fill(this.nameInputLocator, name);
        await this.fill(this.emailInputLocator, email);
        await this.fill(this.subjectInputLocator, subject);
        await this.fill(this.messageInputLocator, message);
    }

    /*Summary: This method uploads a file to the contact form.
     * @param filePath - the path to the file to upload.
     * Author       : Abhishek
     */
    async uploadFile(filePath: string): Promise<void> {
        await this.uploadButtonLocator.setInputFiles(filePath);
    }

    /*Summary: This method submits the contact form and handles the dialog that appears after submission.
     * Author       : Abhishek
     */
    async submitForm(): Promise<void> {
        this.page.once('dialog', async dialog => {
            this.lastDialogMessage = dialog.message();
            await dialog.accept();
        });

        await this.click(this.submitButtonLocator);

    }

    /*Summary: This method verifies that the success message is visible after submitting the contact form.
     * Author       : Abhishek
     */
    async verifySuccessMessage(): Promise<void> {
        await expect(
            this.successAlertLocator,
            "Success message is not displayed."
        ).toBeVisible();

        console.log("Success! Your details have been submitted successfully.");
    }

    /*Summary: This method navigates back to the home page.
     * Author       : Abhishek
     */
    async goToHome(): Promise<void> {
        if (await this.homeButtonLocator.isVisible()) {
            await this.homeButtonLocator.click();
        } else {
            await this.page.getByRole('link', { name: /home/i }).first().click();
        }
    }
}