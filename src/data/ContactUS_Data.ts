import {ContactUs} from "../models/contactus";

export class ContactUsData {
    public static getContactUsDetails(): ContactUs {
        return {
            name: "Test User1",
            email: "test.user1@example.com",
            subject: "Automation Exercise",
            message: "This is a Playwright contact form submission test"
        };
    }
}