import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import {Login} from "../models/login";
import { LoginData } from "../data/loginData";


  test("Login to Automation Exercise", async ({page}) => {
    const loginData: Login = LoginData.getLoginDetails();
    const homePage = new HomePage(page);
     
    await homePage.navigate();
    await homePage.closeAdvertisement();
    await homePage.login(loginData.email, loginData.password);
  });