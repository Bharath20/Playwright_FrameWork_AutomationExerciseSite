import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { invalidLogin, Login } from "../models/login";
import { LoginData } from "../data/loginData";

/*
 * Test Case ID : TCO3
 * Test Summary : Verify not able to login User with incorrect email and password
 * Module       : Login
 * Author       : Abhishek
 */
  test("TCO3_Login with Invalid Credentials", async ({page}) => {
    const homePage = new HomePage(page);
    const invalidLoginData: invalidLogin = LoginData.TC03_getInvalidLoginDetails();
    
    await homePage.navigate();
    await homePage.closeAdvertisement();
    await homePage.verifyHomePageVisible();
    await homePage.login(invalidLoginData.email, invalidLoginData.password);
    await homePage.emailOrPasswordIncorrect();

  });
