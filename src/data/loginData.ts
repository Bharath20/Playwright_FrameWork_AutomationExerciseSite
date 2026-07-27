import {Login} from "../models/login";

export class LoginData {
    public static getLoginDetails(): Login {
        return {
            email: "Test2255@gmail.com",
            password: "Password@123"
        };
    };

}