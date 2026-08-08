import { Locator,type Page } from '@playwright/test';



export class checkoutPage {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly zipCodeInput: Locator;
    readonly continueButton: Locator;

    constructor(private readonly page: Page) {
        this.firstNameInput = page.locator('#first-name')
        this.lastNameInput = page.locator('#last-name')
        this.zipCodeInput = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')

    }
    async cardInfo(
       
    
        firstName: string,
        lastName: string,
        zipCode: string
    ) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(firstName)
        await this.zipCodeInput.fill(firstName)
        await this.continueButton
    }

  async Continue() {
      return await this.page.locator('#continue').click();
  }
    PayInfo() {
    return this.page.locator('[data-test="payment-info-value"]')
    }

    PayText() {
        return this.PayInfo().innerText()
    }
}
