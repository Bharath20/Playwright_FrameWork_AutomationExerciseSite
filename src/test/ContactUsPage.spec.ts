import path from "path";
import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { ContactUsData } from "../data/ContactUS_Data";
import { ContactUs } from "../models/contactus";

/*
 * Test Case ID : TCO6
 * Test Summary : Verify that user can submit contact us form successfully.
 * Module       : Contact Us
 * Author       : Abhishek
 */
  test("TCO6_Contact Us Form", async ({page}) => {
    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);
    const Contactusdata: ContactUs = ContactUsData.getContactUsDetails();
    const uploadFilePath = path.resolve(__dirname, "../data/contact-us-upload.txt");

    await homePage.navigate();
    await homePage.closeAdvertisement();
    await homePage.verifyHomePageVisible();
    await homePage.clickContactUs();
    await contactUsPage.verifyGetInTouchVisible();
    await contactUsPage.fillContactForm(Contactusdata.name, Contactusdata.email, Contactusdata.subject, Contactusdata.message);
    await contactUsPage.uploadFile(uploadFilePath);
    await contactUsPage.submitForm();
    await contactUsPage.verifySuccessMessage();
    await contactUsPage.goToHome();
    await homePage.verifyHomePageVisible();
  });