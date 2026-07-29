import path from "path";
import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ContactUsPage } from "../pages/ContactUsPage";
import {Login} from "../models/login";
import { LoginData } from "../data/loginData";


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

  test("TCO6_Contact Us Form", async ({page}) => {
    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);
    const uploadFilePath = path.resolve(__dirname, "../data/contact-us-upload.txt");

    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    await homePage.navigate();
    await homePage.closeAdvertisement();

    //3. Verify that home page is visible successfully
    await homePage.verifyHomePageVisible();

    //4. Click on 'Contact Us' button
    await homePage.clickContactUs();

    //5. Verify 'GET IN TOUCH' is visible
    await contactUsPage.verifyGetInTouchVisible();

    //6. Enter name, email, subject and message
    await contactUsPage.fillContactForm(
      "Test User1",
      "test.user1@example.com",
      "Automation Exercise",
      "This is a Playwright contact form submission test"
    );

    //7. Upload file
    await contactUsPage.uploadFile(uploadFilePath);

    //8. Click 'Submit' button
    //9. Click OK button
    await contactUsPage.submitForm();

    //10. Verify success message 'Success! Your details have been submitted successfully.' is visible
    await contactUsPage.verifySuccessMessage();

    //11. Click 'Home' button and verify that landed to home page successfully
    await contactUsPage.goToHome();
    await homePage.verifyHomePageVisible();
  });

