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

test("TC07_Verify Test Cases Page", async ({ page }) => {
  const homePage = new HomePage(page);
  const testCasesPage = new TestcasesPage(page);

  await homePage.navigate();
  await homePage.closeAdvertisement();
  await homePage.VerifyclickTestcaseButton();
  await testCasesPage.verifytestcasePageUrlisloaded();
  await testCasesPage.verifyTestCasesAreListed();
});



  