import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { WaitUtils } from "../utils/WaitUtils";


export class HomePage extends BasePage {
  
  readonly signUpOrLoginButtonLocator: Locator;
  readonly emailAddressInputLocator: Locator;
  readonly passwordInputLocator: Locator;
  readonly loginBtnLocator: Locator;
  readonly adCloseButtonLocator: Locator;
  readonly loggedInUserLocator : Locator;
  readonly productsButtonLocator: Locator;
  

  constructor(page: Page) {
    super(page);
    //this.page = page;
    this.signUpOrLoginButtonLocator = page.getByText("Signup / Login")
    this.emailAddressInputLocator = page.locator("//input[@data-qa='login-email']");
    this.passwordInputLocator = page.locator("//input[@data-qa='login-password']");
    this.loginBtnLocator = page.locator("//button[@data-qa='login-button']");    
    this.adCloseButtonLocator = page.getByText("Close");
    this.loggedInUserLocator =page.locator("//a[contains(.,'Logged in as')]");
    this.productsButtonLocator = page.locator("a[href='/products']");
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
    await this.fill(this.emailAddressInputLocator,email);
    await this.fill(this.passwordInputLocator, password);
    await this.click(this.loginBtnLocator);
  }

   async verifyLoggedInUser(expectedUsername:string) {

        await this.verifyText(this.loggedInUserLocator, " Logged in as"+ expectedUsername,
        "Logged in username is not displayed correctly"
        );
        console.log(" Logged in as "+expectedUsername);

      }

  async verifyHomePageLoaded() {

   await expect(this.page).toHaveTitle("Automation Exercise");
}
 async clickProducts() {
    await this.click(this.productsButtonLocator);
}

}