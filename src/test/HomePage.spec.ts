import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginData } from "../data/loginData";
import { Login, TestData } from "../models/login";
import { BasePage } from "../pages/BasePage";

/*
 * Test Case ID : TCO1
 * Test Summary : Login Scenario
 * Module       : Registration
 * Author       : Sooraj
 */
test("Login Scenario", async ({ page }) => {
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

 
});