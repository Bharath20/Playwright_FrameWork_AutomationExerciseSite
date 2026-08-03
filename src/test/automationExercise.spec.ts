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






 
