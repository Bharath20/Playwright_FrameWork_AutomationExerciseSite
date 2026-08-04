import { invalidLogin, Login, TestData } from "../models/login";

export class LoginData {
    //Common Data
    public static getLoginDetails(): Login {
        return {
            email: "Test2255@gmail.com",
            password: "Password@123",
            username: "Test2255"
        };
    };


    public static TC01_getTestDataForSignUp(): TestData {

        return {
            name: "Test User",
            email: "testuserplaywright@gmail.com",
            password: "Password@121212",
            dayValue: "2",
            monthValue: "March",
            yearValue: "2010",
            firstName: "Testfirstname",
            lastName: "ln",
            address: "test address",
            countryValue: "India",
            state: "Kerala",
            city: "TVM",
            zipcode: "695032",
            mobile: "123456214"

        }
    }

    public static TC02_getTestDataForUserCreation(): TestData {

        return {
            name: "TC02 TestUser",
            email: "tc02emailtest@gmail.com",
            password: "Password@121212",
            dayValue: "2",
            monthValue: "March",
            yearValue: "2010",
            firstName: "Testfirstname",
            lastName: "ln",
            address: "test address",
            countryValue: "India",
            state: "Kerala",
            city: "TVM",
            zipcode: "695032",
            mobile: "123456214"

        }
    }


    public static TC03_getInvalidLoginDetails(): invalidLogin {
        return {
            email: "invalid@example.com",
            password: "invalidpassword"
        };


         public static TC16_getTestDataForUserCreation():TestData{

        return {
            name:"TC16 TestUser",
            email:"tc16emailtest@gmail.com",
            password:"Password@121212",
            dayValue:"2",
            monthValue:"March",
            yearValue:"2010",
            firstName:"Testfirstname",
            lastName:"ln",
            address:"test address",
            countryValue:"India",
            state:"Kerala",
            city:"TVM",
            zipcode:"695032",
            mobile:"123456214"

        }
    }

}