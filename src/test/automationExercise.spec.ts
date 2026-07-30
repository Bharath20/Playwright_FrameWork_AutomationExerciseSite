import path from "path";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { TestcasesPage } from "../pages/TestcasesPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { LoginData } from "../data/loginData";
import { ProductsPage } from "../pages/ProductsPage";
import {Login, TestData} from "../models/login";
import { BasePage } from "../pages/BasePage";

/*
 * Test Case ID : TCO1 
 * Test Summary : Verify that a new user can register successfully.
 * Module       : Registration
 * Author       : Sooraj 
 */
  test("TCO1_Register User", async ({page}) => {
    const loginData: Login = LoginData.getLoginDetails();
    const testData:TestData=LoginData.TC01_getTestDataForSignUp();
    const homePage = new HomePage(page);
    const basePage=new BasePage(page);
     
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    await homePage.navigate();
    await homePage.closeAdvertisement();

    //3. Verify that home page is visible successfully
    await expect(page,"Home Page is not displayed").toHaveTitle('Automation Exercise');

    //4. Click on 'Signup / Login' button
    //5. Verify 'New User Signup!' is visible
    //6. Enter name and email address
    //7. Click 'Signup' button
    await homePage.signUp(testData.name, testData.email);

    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    //9. Fill details: Title, Name, Email, Password, Date of birth
    //10. Select checkbox 'Sign up for our newsletter!'
    //11. Select checkbox 'Receive special offers from our partners!'
    await homePage.accountInformationCreation(testData.password,testData.dayValue,testData.monthValue,testData.yearValue);

    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    //13. Click 'Create Account button'
    await homePage.addressInformationCreation(testData.firstName,testData.lastName,testData.address,testData.countryValue,testData.state,testData.city,testData.zipcode,testData.mobile);

    //14. Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.locator('h2').first(),"Account Created! message not displayed").toHaveText('Account Created!');

    //15. Click 'Continue' button
    await basePage.click(homePage.signUpContinueBtnLocator);

    //16. Verify that 'Logged in as username' is visible
    await homePage.verifyLoggedInUser(testData.name);

    //17. Click 'Delete Account' button
    await homePage.deleteAccount();

    //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.locator('h2').first(),"Account Deleted! message not displayed").toHaveText('Account Deleted!');

     //15. Click 'Continue' button
    await basePage.click(homePage.signUpContinueBtnLocator);


  });

    test("TCO8_Verify All Products and product detail page", async ({page}) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await homePage.navigate();
    await homePage.closeAdvertisement();
    await productsPage.openProductsPage();

  });

  test("TC07_Verify Test Cases Page", async({page}) => {
    const homePage = new HomePage(page);
    const testCasesPage = new TestcasesPage(page);

    await homePage.navigate();
    await homePage.closeAdvertisement();
    await homePage.VerifyclickTestcaseButton();
    await testCasesPage.verifytestcasePageUrlisloaded();
    await testCasesPage.verifyTestCasesAreListed();
  });

  test("TCO6_Contact Us Form", async ({page}) => {
    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);
    const uploadFilePath = path.resolve(__dirname, "../data/contact-us-upload.txt");

    await homePage.navigate();
    await homePage.closeAdvertisement();
    await homePage.verifyHomePageVisible();
    await homePage.clickContactUs();
    await contactUsPage.verifyGetInTouchVisible();
    await contactUsPage.fillContactForm(
      "Test User1",
      "test.user1@example.com",
      "Automation Exercise",
      "This is a Playwright contact form submission test"
    );
    await contactUsPage.uploadFile(uploadFilePath);
    await contactUsPage.submitForm();
    await contactUsPage.verifySuccessMessage();
    await contactUsPage.goToHome();
    await homePage.verifyHomePageVisible();
  });

