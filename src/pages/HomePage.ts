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
  readonly productsButtonLocator: Locator;
  readonly clickTestcaseButton: Locator;
  readonly homePageVisibleLocator: Locator;
  readonly signUpNameInputLocator: Locator;
  readonly signUpEmailInputLocator: Locator;
  readonly signUpBtnLocator: Locator;
  readonly mrRadioBtnLocator: Locator;
  readonly signUpPasswordInputLocator: Locator;
  readonly signUpFirstNameInputLocator: Locator;
  readonly signUpLastNameInputLocator: Locator;
  readonly daySelectLocator: Locator;
  readonly monthSelectLocator: Locator;
  readonly yearSelectLocator: Locator;
  readonly newsLetterCheckSelectLocator: Locator;
  readonly receiveOffersCheckSelectLocator: Locator;
  readonly signUpAddressInputLocator: Locator;
  readonly countrySelectLocator: Locator;
  readonly signUpStateInputLocator: Locator;
  readonly signUpCityInputLocator: Locator;
  readonly signUpZipcodeInputLocator: Locator;
  readonly signUpMobileNumberInputLocator: Locator;
  readonly signUpCreateBtnLocator: Locator;
  readonly signUpContinueBtnLocator: Locator;
  readonly deleteButtonLocator: Locator;
  readonly logoutButtonLocator: Locator;



  constructor(page: Page) {
    super(page);
    this.signUpOrLoginButtonLocator = page.getByText("Signup / Login");
    this.contactUsButtonLocator = page.locator("a[href='/contact_us'], a:has-text('Contact Us'), a:has-text('Contact us')");
    this.emailAddressInputLocator = page.locator("//input[@data-qa='login-email']");
    this.passwordInputLocator = page.locator("//input[@data-qa='login-password']");
    this.loginBtnLocator = page.locator("//button[@data-qa='login-button']");
    this.adCloseButtonLocator = page.getByText("Close");
    this.loggedInUserLocator = page.locator("//a[contains(.,'Logged in as')]");
    this.productsButtonLocator = page.locator("a[href='/products']");
    this.clickTestcaseButton = page.locator("//a[contains(text(),' Test Cases')]");
    this.homePageVisibleLocator = page.locator("//img[@alt='Website for automation practice']");
    this.signUpNameInputLocator = page.locator("//input[@data-qa='signup-name']");
    this.signUpEmailInputLocator = page.locator("//input[@data-qa='signup-email']");
    this.signUpBtnLocator = page.locator("//button[@data-qa='signup-button']");

   }

  async navigate() {
    console.log("Navigating...");
    this.navigateTo("https://automationexercise.com/");
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

  /*
  * Summary: * This method is used to verify home page is loaded.
  *  Author       : Stimna 
  */
  async verifyHomePageLoaded() {
    await expect(this.page).toHaveTitle("Automation Exercise");
  }
  /*
  * Summary: * This method is used to Click on the Products tab
  *  Author       : Stimna 
  */
  async clickProducts() {
    await this.click(this.productsButtonLocator);
  }

  /* Summary: * This method is used to click on the testcase button.
  * Author       : Dixy Salin
  */
  async VerifyclickTestcaseButton() {
    await this.click(this.clickTestcaseButton);
  }

  /* Summary: * This method is used to sign Up.
   * @param name - name of the user.
   * @param email - email of the user. 
   * Author       : Sooraj 
   */
  async signUp(name: string, email: string) {
    await this.click(this.signUpOrLoginButtonLocator);
    await this.fill(this.signUpNameInputLocator, name);
    await this.fill(this.signUpEmailInputLocator, email);
    await this.click(this.signUpBtnLocator);
  }



}
