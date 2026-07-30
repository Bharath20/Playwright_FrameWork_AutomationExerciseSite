import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { WaitUtils } from "../utils/WaitUtils";

export class TestcasesPage extends BasePage {
  readonly VerifyTestcasepageLocator: Locator;
  readonly firsttestcaseLinkLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.VerifyTestcasepageLocator = page.locator("//span[contains(text(),'Below is the list of test Cases for you to practice the Automation')]");
    this.firsttestcaseLinkLocator = page.locator("//u[text()='Test Case 1: Register User']");
  }

  /* Summary: * This method is used to verify that the testcase page is loaded successfully.
   * Author       : Dixy Salin
   */
  async verifytestcasePageUrlisloaded(): Promise<void> {
    await expect(this.page, "Testcase page URL is loaded").toHaveURL("https://automationexercise.com/test_cases");
  }

  /* Summary: * This method is used to verify the first testcase is listed.
   * Author       : Dixy Salin
   */
async verifyTestCasesAreListed(): Promise<void> {
    await expect(this.VerifyTestcasepageLocator.isVisible(), "Testcase list is displayed below");
    await expect(this.firsttestcaseLinkLocator.isVisible(), "First Testcase is visible");
  }

}
