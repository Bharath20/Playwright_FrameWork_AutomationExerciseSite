import path from "path";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { TestcasesPage } from "../pages/TestcasesPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { LoginData } from "../data/loginData";
import { ProductsPage } from "../pages/ProductsPage";
import { Login, TestData } from "../models/login";
import { BasePage } from "../pages/BasePage";
import { CartPage } from "../pages/CartPage";

/*
 * Test Case ID : TCO1
 * Test Summary : Verify that a new user can register successfully.
 * Module       : Registration
 * Author       : Sooraj
 */
test("TCO1_Register User", async ({ page }) => {
  const loginData: Login = LoginData.getLoginDetails();
  const testData: TestData = LoginData.TC01_getTestDataForSignUp();
  const homePage = new HomePage(page);
  const basePage = new BasePage(page);
 
  //1. Launch browser
  //2. Navigate to url 'http://automationexercise.com'
  await homePage.navigate();
  await homePage.closeAdvertisement();
 
  //3. Verify that home page is visible successfully
  await expect(page, "Home Page is not displayed").toHaveTitle('Automation Exercise');
 
  //4. Click on 'Signup / Login' button
  //5. Verify 'New User Signup!' is visible
  //6. Enter name and email address
  //7. Click 'Signup' button
  await homePage.signUp(testData.name, testData.email);
 
  //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  //9. Fill details: Title, Name, Email, Password, Date of birth
  //10. Select checkbox 'Sign up for our newsletter!'
  //11. Select checkbox 'Receive special offers from our partners!'
  await homePage.accountInformationCreation(testData.password, testData.dayValue, testData.monthValue, testData.yearValue);
 
  //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  //13. Click 'Create Account button'
  await homePage.addressInformationCreation(testData.firstName, testData.lastName, testData.address, testData.countryValue, testData.state, testData.city, testData.zipcode, testData.mobile);
 
  //14. Verify that 'ACCOUNT CREATED!' is visible
  await expect(page.locator('h2').first(), "Account Created! message not displayed").toHaveText('Account Created!');
 
  //15. Click 'Continue' button
  await basePage.click(homePage.signUpContinueBtnLocator);
 
  //16. Verify that 'Logged in as username' is visible
  await homePage.verifyLoggedInUser(testData.name);
 
  //17. Click 'Delete Account' button
  await homePage.deleteAccount();
 
  //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(page.locator('h2').first(), "Account Deleted! message not displayed").toHaveText('Account Deleted!');
 
  //15. Click 'Continue' button
  await basePage.click(homePage.signUpContinueBtnLocator);
  
});

test("TCO8_Verify All Products and product detail page", async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);

  await homePage.navigate();
  await homePage.closeAdvertisement();
  await productsPage.openProductsPage();

});

  /*
 * Test Case ID : TCO4
 * Test Summary : Verify that user can logout successfully.
 * Module       : User Logout
 * Author       : Dixy 
 */
  test("TC04_Logout User", async ({page}) => {
    const homePage = new HomePage(page);
    const loginData: Login = LoginData.getLoginDetails();

    await homePage.navigate();
    await homePage.closeAdvertisement();

    await homePage.login(loginData.email, loginData.password);
    //Verify the user is logged in successfully
    await homePage.verifyLoggedInUser(loginData.username); 

    //click on logout button 
    await homePage.ClickLogoutButton();
    //Verify user is navigated to the login page after logout
    await homePage.VerifyUserReturnsToHompage();

  });





