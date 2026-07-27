import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { WaitUtils } from "../utils/WaitUtils";



export class HomePage extends BasePage {
  
  readonly signUpOrLoginButtonLocator: Locator;
  readonly emailAddressInputLocator: Locator;
  readonly passwordInputLocator: Locator;
  readonly loginBtnLocator: Locator;
  readonly adCloseButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.signUpOrLoginButtonLocator = page.getByText("Signup / Login")
    this.emailAddressInputLocator = page.locator("//input[@data-qa='login-email']");
    this.passwordInputLocator = page.locator("//input[@data-qa='login-password']");
    this.loginBtnLocator = page.locator("//button[@data-qa='login-button']");    
    this.adCloseButtonLocator = page.getByText("Close");
  }



async navigate() {
    console.log("Navigating...");
    await this.page.goto('https://automationexercise.com/',{
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
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

  

}