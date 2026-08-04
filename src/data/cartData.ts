import {addressVerificationData,paymentDetailsData}  from "../models/cart";

export class CartData{
    static TC16_getAddressData():addressVerificationData
    {
    return   {
    name:"Mr. Testfirstname ln",
    address:"test address",
    cityStatePostalCode:"TVM Kerala 695032",
    country:"India",
    phone:"123456214"

     };

    }

    static TC16_getPaymentDetailsData():paymentDetailsData
    {
    return   {
    nameOnCard:"Test Name",
    cardNumber:"1234567890123456",
    cvc:"123",
    expirationDate:"12",
    year:"2025" }
    }
}
