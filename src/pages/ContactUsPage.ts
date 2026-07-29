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

  async verifyGetInTouchVisible(): Promise<void> {
    await WaitUtils.waitForVisible(this.getInTouchTitleLocator);
    await expect(this.getInTouchTitleLocator).toBeVisible();
  }

  async fillContactForm(name: string, email: string, subject: string, message: string): Promise<void> {
    await this.fill(this.nameInputLocator, name);
    await this.fill(this.emailInputLocator, email);
    await this.fill(this.subjectInputLocator, subject);
    await this.fill(this.messageInputLocator, message);
  }

  async uploadFile(filePath: string): Promise<void> {
    await this.uploadButtonLocator.setInputFiles(filePath);
  }

  async submitForm(): Promise<void> {
    this.page.once('dialog', async dialog => {
      this.lastDialogMessage = dialog.message();
      await dialog.accept();
    });

    await this.click(this.submitButtonLocator);

    try {
      await this.page.waitForTimeout(3000);
    } catch {
      // ignore short wait failures
    }
  }

  async verifySuccessMessage(): Promise<void> {
    const text = await this.page.locator('body').textContent();
    const hasSuccessText = text?.includes('Success! Your details have been submitted successfully.') ?? false;
    const hasAlert = await this.successAlertLocator.isVisible().catch(() => false);

    if (!hasSuccessText && !hasAlert && !this.lastDialogMessage?.includes('Success! Your details have been submitted successfully.')) {
      throw new Error('Contact form success message was not displayed.');
    }
  }

  async goToHome(): Promise<void> {
    const homeButton = this.homeButtonLocator;
    await homeButton.waitFor({ state: 'visible', timeout: 10000 }).catch(() => undefined);
    if (await homeButton.isVisible().catch(() => false)) {
      await homeButton.click();
    } else {
      await this.page.getByRole('link', { name: /home/i }).first().click().catch(() => undefined);
    }
  }
}