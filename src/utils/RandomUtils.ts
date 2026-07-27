export class RandomUtils {


    // Generate random string
    static generateRandomString(length: number = 10): string {

        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        let result = "";

        for (let i = 0; i < length; i++) {

            const randomIndex = Math.floor(
                Math.random() * characters.length
            );

            result += characters[randomIndex];
        }

        return result;
    }


    // Generate random lowercase string
    static generateRandomLowerCaseString(length: number = 10): string {

        const characters = "abcdefghijklmnopqrstuvwxyz";

        let result = "";

        for (let i = 0; i < length; i++) {

            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        return result;
    }


    // Generate random number
    static generateRandomNumber(length: number = 5): string {

        let result = "";

        for (let i = 0; i < length; i++) {

            result += Math.floor(Math.random() * 10);

        }

        return result;
    }


    // Generate random alphanumeric value
    static generateRandomAlphaNumeric(length: number = 10): string {

        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let result = "";

        for (let i = 0; i < length; i++) {

            result += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );

        }

        return result;
    }


    // Generate random email
    static generateRandomEmail(): string {

        return `test_${this.generateRandomAlphaNumeric(6)}@gmail.com`;

    }


    // Generate random password
    static generateRandomPassword(length: number = 8): string {

        return this.generateRandomAlphaNumeric(length);

    }


    // Generate random phone number
    static generateRandomPhoneNumber(): string {

        return "9" + this.generateRandomNumber(9);

    }

}