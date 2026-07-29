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
  readonly signUpNameInputLocator : Locator;
  readonly signUpEmailInputLocator : Locator;
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
  readonly signUpAddressInputLocator : Locator;
  readonly countrySelectLocator: Locator;
  readonly signUpStateInputLocator: Locator;
  readonly signUpCityInputLocator: Locator;
  readonly signUpZipcodeInputLocator: Locator;
  readonly signUpMobileNumberInputLocator: Locator;
  readonly signUpCreateBtnLocator: Locator;
  readonly signUpContinueBtnLocator: Locator;
  readonly deleteButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    //this.page = page;
    this.signUpOrLoginButtonLocator = page.getByText("Signup / Login")
    this.emailAddressInputLocator = page.locator("//input[@data-qa='login-email']");
    this.passwordInputLocator = page.locator("//input[@data-qa='login-password']");
    this.loginBtnLocator = page.locator("//button[@data-qa='login-button']");    
    this.adCloseButtonLocator = page.getByText("Close");
    this.loggedInUserLocator =page.locator("//a[contains(.,'Logged in as')]");
    this.signUpNameInputLocator=page.locator("//input[@data-qa='signup-name']");
    this.signUpEmailInputLocator=page.locator("//input[@data-qa='signup-email']");
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

        await this.verifyText(this.loggedInUserLocator, " Logged in as "+ expectedUsername,
        "Logged in username is not displayed correctly"
        );
        console.log(" Logged in as "+expectedUsername);

      }

    async signUp(name: string, email: string) {
      await WaitUtils.waitForVisible(this.signUpOrLoginButtonLocator);
      await this.click(this.signUpOrLoginButtonLocator);
      await this.fill(this.signUpNameInputLocator,name);
      await this.fill(this.signUpEmailInputLocator, email);
      await this.click(this.signUpBtnLocator);

    }

    async accountInformationCreation(password:string,dayValue:string,monthValue:string,yearValue:string){
      await this.click(this.mrRadioBtnLocator);
      await this.fill(this.signUpPasswordInputLocator,password);
      await this.daySelectLocator.selectOption(dayValue);
      await this.monthSelectLocator.selectOption(monthValue);
      await this.yearSelectLocator.selectOption(yearValue);
      await this.click(this.newsLetterCheckSelectLocator);
      await this.click(this.receiveOffersCheckSelectLocator);
    }

    async addressInformationCreation(firstName:string,lastName:string,address:string,countryValue:string,state:string,city:string,zipcode:string,mobile:string){
      await this.fill(this.signUpFirstNameInputLocator,firstName);
      await this.fill(this.signUpLastNameInputLocator,lastName);
      await this.fill(this.signUpAddressInputLocator,address);
      await this.countrySelectLocator.selectOption(countryValue);
      await this.fill(this.signUpStateInputLocator,state);
      await this.fill(this.signUpCityInputLocator,city);
      await this.fill(this.signUpZipcodeInputLocator,zipcode);
      await this.fill(this.signUpMobileNumberInputLocator,mobile);
      await this.click(this.signUpCreateBtnLocator);

    }

    async deleteAccount(){
      await this.click(this.deleteButtonLocator);

    }
  

}