import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { WaitUtils } from "../utils/WaitUtils";


export class HomePage extends BasePage {

  readonly signUpOrLoginButtonLocator: Locator;
  readonly contactUsButtonLocator: Locator;
  readonly emailAddressInputLocator: Locator;
  readonly passwordInputLocator: Locator;
  readonly loginBtnLocator: Locator;
  readonly adCloseButtonLocator: Locator;
  readonly loggedInUserLocator: Locator;
  readonly clickTestcaseButton: Locator;
  readonly homePageVisibleLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.signUpOrLoginButtonLocator = page.getByText("Signup / Login")
    this.contactUsButtonLocator = page.locator("a[href='/contact_us'], a:has-text('Contact Us'), a:has-text('Contact us')");
    this.emailAddressInputLocator = page.locator("//input[@data-qa='login-email']");
    this.passwordInputLocator = page.locator("//input[@data-qa='login-password']");
    this.loginBtnLocator = page.locator("//button[@data-qa='login-button']");
    this.adCloseButtonLocator = page.getByText("Close");
    this.loggedInUserLocator = page.locator("//a[contains(.,'Logged in as')]");
    this.clickTestcaseButton = page.locator("(//button[text()='Test Cases'])[1]");
    this.homePageVisibleLocator = page.locator("//img[@alt='Website for automation practice']");
  }

  async navigate() {
    console.log("Navigating...");
    await this.page.goto("https://automationexercise.com/");
    await expect(this.page).toHaveURL('https://automationexercise.com/');
    console.log(await this.page.url());
  }

  async closeAdvertisement() {

    await this.closeAdvertisementIfPresent();

  }

  async login(email: string, password: string) {

    await WaitUtils.waitForVisible(this.signUpOrLoginButtonLocator);
    await this.click(this.signUpOrLoginButtonLocator);
    await this.fill(this.emailAddressInputLocator, email);
    await this.fill(this.passwordInputLocator, password);
    await this.click(this.loginBtnLocator);
  }
  /*Summary: This method clicks on the "Contact Us" button to navigate to the Contact Us page.
     * Author       : Abhishek
     */
  async clickContactUs(): Promise<void> {
    await this.click(this.contactUsButtonLocator);
  }
  /*Summary: This method verifies that the home page is visible.
    * Author       : Abhishek
    */
  async verifyHomePageVisible(): Promise<void> {
    await WaitUtils.waitForVisible(this.homePageVisibleLocator);
    await expect(this.homePageVisibleLocator).toBeVisible();
  }

  async verifyLoggedInUser(expectedUsername: string) {

    await this.verifyText(this.loggedInUserLocator, " Logged in as " + expectedUsername,
      "Logged in username is not displayed correctly"
    );
    console.log(" Logged in as " + expectedUsername);

  }

  async VerifyclickTestcaseButton() {
    await this.click(this.clickTestcaseButton);

  }



}