import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { WaitUtils } from "../utils/WaitUtils";

export class TestcasesPage extends BasePage {

readonly VerifyTestcasepageLocator : Locator;
readonly firsttestcaseLinkLocator : Locator;

constructor(page:Page){
    super(page);
    this.VerifyTestcasepageLocator = page.locator("//span[contains(text(),'Below is the list of test Cases for you to practice the Automation')]");
    this.firsttestcaseLinkLocator = page.locator("//u[text()='Test Case 1: Register User']");
}

 async verifytestcasePageUrlisloaded(): Promise<void> {
    await expect(this.page).toHaveURL("https://automationexercise.com/test_cases");
  }

async verifyTestCasesAreListed(): Promise<void> {
    await expect(this.VerifyTestcasepageLocator.isVisible());
    await expect(this.firsttestcaseLinkLocator.isVisible());
  }

}
