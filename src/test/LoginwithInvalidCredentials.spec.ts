import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

/*
 * Test Case ID : TCO3
 * Test Summary : Verify not able to login User with incorrect email and password
 * Module       : Login
 * Author       : Abhishek
 */
  test("TCO3_Login with Invalid Credentials", async ({page}) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.closeAdvertisement();
    await expect(page, "Home Page is not displayed").toHaveTitle('Automation Exercise');
    await homePage.login("invalid@example.com", "invalidpassword");
    await homePage.emailOrPasswordIncorrect();

  });
