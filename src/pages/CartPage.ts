import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { WaitUtils } from "../utils/WaitUtils";

export class CartPage extends BasePage{

    readonly cartButtonLocator: Locator;
    readonly emailAddressSubscribeInputLocator: Locator;
    readonly successMessageLocator: Locator;
    readonly subscribeButtonLocator: Locator;
    readonly cartPageLocator:Locator;
    readonly proceedToCheckout:Locator;
    readonly addressNameLocator:Locator;
    readonly addressLocator:Locator;
    readonly addressCityStatePostalCodeLocator:Locator;
    readonly addressCountryLocator:Locator;
    readonly addressPhoneLocator:Locator;
    readonly commentTextAreaLocator:Locator;
    readonly placeOrderButtonLocator:Locator;
    readonly nameOnCardLocator:Locator;
    readonly cardNumberLocator:Locator;
    readonly cvcLocator:Locator;
    readonly expirationDateLocator:Locator;     
    readonly yearLocator:Locator;
    readonly payAndConfirmOrderButtonLocator:Locator;


    constructor(page: Page) {
    super(page);
    this.cartButtonLocator = page.locator(" //a[normalize-space()='Cart']/..//i[@class='fa fa-shopping-cart']");  
    this.emailAddressSubscribeInputLocator = page.locator("#susbscribe_email");
    this.successMessageLocator = page.locator("//div[@id='success-subscribe']/child::div");
    this.subscribeButtonLocator = page.locator("//i[@class='fa fa-arrow-circle-o-right']"); 
    this.cartPageLocator = page.locator("//li[text()='Shopping Cart']"); 
    this.proceedToCheckout = page.locator("//a[text()='Proceed To Checkout']"); 

    this.addressNameLocator = page.locator("//h3[text()='Your delivery address']/../..//li[@class='address_firstname address_lastname']"); 
    this.addressLocator = page.locator("//h3[text()='Your delivery address']/../..//li[@class='address_address1 address_address2'][2]"); 
    this.addressCityStatePostalCodeLocator = page.locator("//h3[text()='Your delivery address']/../..//li[@class='address_city address_state_name address_postcode']"); 
    this.addressCountryLocator = page.locator("//h3[text()='Your delivery address']/../..//li[@class='address_country_name']"); 
    this.addressPhoneLocator = page.locator("//h3[text()='Your delivery address']/../..//li[@class='address_phone']"); 
    this.commentTextAreaLocator = page.locator("//textarea[@name='message']"); 
    this.placeOrderButtonLocator = page.locator("//a[text()='Place Order']");

    this.nameOnCardLocator = page.locator("//input[@name='name_on_card']");
    this.cardNumberLocator = page.locator("//input[@name='card_number']");
    this.cvcLocator = page.locator("//input[@name='cvc']");
    this.expirationDateLocator = page.locator("//input[@name='expiry_month']");
    this.yearLocator = page.locator("//input[@name='expiry_year']");
    this.payAndConfirmOrderButtonLocator = page.locator("//button[@id='submit']");



}

/* Summary: * This method is used to verify address details in Cart Page.
   * Author       : Sooraj
   */
  async VerifyAddressDetails(name:string,address:string,cityStatePostalCode:string,country:string,phone:string) {
    await this.verifyText(this.addressNameLocator, name,
      "Customer name not displayed correctly");
      await this.verifyText(this.addressLocator, address,
      "Customer address not displayed correctly");
      await this.verifyText(this.addressCityStatePostalCodeLocator, cityStatePostalCode,
      "Customer city State and Postal Code not displayed correctly");
      await this.verifyText(this.addressCountryLocator, country,
      "Customer country not displayed correctly");
      await this.verifyText(this.addressPhoneLocator, phone,
      "Customer phone not displayed correctly");
  }

  /* Summary: * This method is used to add comments and place order.
   * Author       : Sooraj
   */
  async addCommentsAndPlaceOrder(comment:string)
  {
    await this.fill(this.commentTextAreaLocator, comment);
    await this.click(this.placeOrderButtonLocator);
  }

    /* Summary: * This method is used to enter card details.
   * Author       : Sooraj
   */
  async addCardDetails(nameOnCard:string, cardNumber:string, cvc:string, expirationDate:string,year:string)
  {
    await this.fill(this.nameOnCardLocator, nameOnCard);
    await this.fill(this.cardNumberLocator, cardNumber);
    await this.fill(this.cvcLocator, cvc);
    await this.fill(this.expirationDateLocator, expirationDate);
    await this.fill(this.yearLocator, year);    
    await this.click(this.payAndConfirmOrderButtonLocator);
    
  }

}