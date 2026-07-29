import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import {Login} from "../models/login";
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

  test("TCO2_Register User", async ({page}) => {
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
