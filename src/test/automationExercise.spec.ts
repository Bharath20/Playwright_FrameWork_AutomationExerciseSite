import path from "path";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { TestcasesPage } from "../pages/TestcasesPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { Login } from "../models/login";
import { LoginData } from "../data/loginData";
import { ProductsPage } from "../pages/ProductsPage";



  test("TCO1_Register User", async ({page}) => {
    const loginData: Login = LoginData.getLoginDetails();
    const homePage = new HomePage(page);
    
     
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    await homePage.navigate();
    await homePage.closeAdvertisement();
    //4. Click on 'Signup / Login' button
    //5. Verify 'Login to your account' is visible
    //6. Enter correct email address and password
    //7. Click 'login' button
    await homePage.login(loginData.email, loginData.password);

    //8.Verify that 'Logged in as username' is visible
    await homePage.verifyLoggedInUser(loginData.username);

  });

    test("TCO8_Verify All Products and product detail page", async ({page}) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    await homePage.navigate();
    await homePage.closeAdvertisement();
    await productsPage.openProductsPage();

  });
test("TCO9_Search Product", async ({ page }) => {

    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
  
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    await homePage.navigate();
    await homePage.closeAdvertisement();
    await homePage.verifyHomePageLoaded();
//Click on 'Products' button
//Verify user is navigated to ALL PRODUCTS page successfully
    await homePage.clickProducts();
    await productsPage.verifyAllProductsPage();
     
// 6. Enter product name in search input and click search button
// 7. Verify 'SEARCHED PRODUCTS' is visible
// 8. Verify all the products related to search are visible
    await productsPage.searchProduct("Blue Top");
    await productsPage.verifySearchedProductsVisible();
    await productsPage.verifySearchResults("Blue Top");
  
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

