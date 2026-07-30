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
  readonly homePageLogoutLocator: Locator;
  readonly LabelBacktoLoginlocator: Locator;

  constructor(page: Page) {
    super(page);
    this.signUpOrLoginButtonLocator = page.getByText("Signup / Login")
    this.contactUsButtonLocator = page.locator("a[href='/contact_us'], a:has-text('Contact Us'), a:has-text('Contact us')");
    this.emailAddressInputLocator = page.locator("//input[@data-qa='login-email']");
    this.passwordInputLocator = page.locator("//input[@data-qa='login-password']");
    this.loginBtnLocator = page.locator("//button[@data-qa='login-button']");
    this.adCloseButtonLocator = page.getByText("Close");
    this.loggedInUserLocator = page.locator("//a[contains(.,'Logged in as')]");
    this.clickTestcaseButton = page.locator("//a[contains(text(),' Test Cases')]");
    this.homePageVisibleLocator = page.locator("//img[@alt='Website for automation practice']");
    this.homePageLogoutLocator = page.locator("//a[contains(text(), ' Logout')]");
    this.LabelBacktoLoginlocator = page.locator("//h2[text()='Login to your account']");
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

  async clickContactUs(): Promise<void> {
    await this.click(this.contactUsButtonLocator);
  }

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

  /* Summary: * This method is used to click on the testcase button.
 * Author       : Dixy
 */
  //Click on the testcase button
  async VerifyclickTestcaseButton() {
    await this.click(this.clickTestcaseButton);
  }

  /* Summary: * This method is used to click on the Logout button.
* Author       : Dixy
*/
  //Click on the Logout button
  async ClickLogoutButton() {
    await this.click(this.homePageLogoutLocator);
  }

  /* Summary: * This method is used to returns to the Home page.
* Author       : Dixy
*/
  async VerifyUserReturnsToHompage() {
    await expect(this.page).toHaveURL('https://automationexercise.com/login');
    console.log(await this.page.url());
    await this.verifyText(this.LabelBacktoLoginlocator, "Login to your account",
      "User is successfully returns to login page");
  }


}