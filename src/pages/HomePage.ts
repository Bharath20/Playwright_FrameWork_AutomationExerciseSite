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
  readonly homePageLogoutLocator: Locator;
  readonly LabelBacktoLoginlocator: Locator;
  readonly emailAlreadyExistsError: Locator;



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
    this.mrRadioBtnLocator = page.locator("//input[@id='id_gender1']");
    this.signUpPasswordInputLocator = page.locator("//input[@data-qa='password']");
    this.signUpFirstNameInputLocator = page.locator("//input[@data-qa='first_name']");
    this.signUpLastNameInputLocator = page.locator("//input[@data-qa='last_name']");
    this.daySelectLocator = page.locator("#days");
    this.monthSelectLocator = page.locator("#months");
    this.yearSelectLocator = page.locator("#years");
    this.newsLetterCheckSelectLocator = page.locator("#newsletter");
    this.receiveOffersCheckSelectLocator = page.locator("#optin");
    this.signUpAddressInputLocator = page.locator("#address1");
    this.countrySelectLocator = page.locator("#country");
    this.signUpStateInputLocator = page.locator("#state");
    this.signUpCityInputLocator = page.locator("#city");
    this.signUpZipcodeInputLocator = page.locator("#zipcode");
    this.signUpMobileNumberInputLocator = page.locator("#mobile_number");
    this.signUpCreateBtnLocator = page.locator("//button[@data-qa='create-account']");
    this.signUpContinueBtnLocator = page.locator("//a[@data-qa='continue-button']");
    this.deleteButtonLocator = page.getByText(" Delete Account");
    this.logoutButtonLocator = page.getByText(" Logout");
    this.homePageLogoutLocator = page.locator("//a[contains(text(), 'Logout')]");
    this.LabelBacktoLoginlocator = page.locator("//h2[text()='Login to your account']");
    this.emailAlreadyExistsError = page.locator("//p[text()='Email Address already exist!']");

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

  /* 
  * Summary: * This method is used for filling account information.
  * @param password - password of the user.
  * @param dayValue - dayValue of the user. 
  * @param monthValue - monthValue of the user.
  * @param yearValue - yearValue of the user.
  * Author       : Sooraj 
  */
  async accountInformationCreation(password: string, dayValue: string, monthValue: string, yearValue: string) {
    await this.click(this.mrRadioBtnLocator);
    await this.fill(this.signUpPasswordInputLocator, password);
    await this.daySelectLocator.selectOption(dayValue);
    await this.monthSelectLocator.selectOption(monthValue);
    await this.yearSelectLocator.selectOption(yearValue);
    await this.click(this.newsLetterCheckSelectLocator);
    await this.click(this.receiveOffersCheckSelectLocator);
  }

  /* 
  * Summary: * This method is used for filling address information of the user.
  * @param firstName - firstName of the user.
  * @param lastName - lastName of the user. 
  * @param address - address of the user.
  * @param countryValue - country of the user.
  * @param state - state of the user. 
  * @param city - city of the user.
  * @param zipcode - zipcode of address of the user.
  * @param mobile - mobile number of the user.
  * Author       : Sooraj 
  */
  async addressInformationCreation(firstName: string, lastName: string, address: string, countryValue: string, state: string, city: string, zipcode: string, mobile: string) {
    await this.fill(this.signUpFirstNameInputLocator, firstName);
    await this.fill(this.signUpLastNameInputLocator, lastName);
    await this.fill(this.signUpAddressInputLocator, address);
    await this.countrySelectLocator.selectOption(countryValue);
    await this.fill(this.signUpStateInputLocator, state);
    await this.fill(this.signUpCityInputLocator, city);
    await this.fill(this.signUpZipcodeInputLocator, zipcode);
    await this.fill(this.signUpMobileNumberInputLocator, mobile);
    await this.click(this.signUpCreateBtnLocator);

  }

  /* 
  * Summary: * This method is used Delete the account of the user
  * Author       : Sooraj 
  */
  async deleteAccount() {
    await this.click(this.deleteButtonLocator);
  }

  /* Summary: * This method is used to click on the Logout button.
  * Author       : Dixy Salin
  */
  async ClickLogoutButton() {
    await this.click(this.homePageLogoutLocator);
  }

  /* Summary: * This method is used to returns to the Home page.
  * Author       : Dixy Salin
  */
  async VerifyUserReturnsToHompage() {
    await expect(this.page).toHaveURL('https://automationexercise.com/login');
    console.log(await this.page.url());
    await this.verifyText(this.LabelBacktoLoginlocator, "Login to your account",
      "User is successfully returns to login page");
  }

  /* 
    * Summary: * This method is used to verify the error message when user tries to login with incorrect email and password.
    * @param email - email of the user.
    * @param password - password of the user.
    * Author       : Abhishek 
    */

  async emailOrPasswordIncorrect() {
    await expect(
      this.page.getByText('Your email or password is incorrect!')
    ).toBeVisible();

  }

  async verifyEmailAlreadyExistsError(): Promise<void> {
    await expect(this.emailAlreadyExistsError).toBeVisible();

    await expect(this.emailAlreadyExistsError).toHaveText('Email Address already exist!');
}

}
