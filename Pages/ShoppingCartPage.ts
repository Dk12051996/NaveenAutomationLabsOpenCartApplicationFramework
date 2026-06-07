import {test,expect,Page,Locator} from "@playwright/test"

export class ShoppingCartPage{

    //Variable
  private readonly page : Page;
  private readonly lblTotalPrice : Locator;
  private readonly btnCheckout : Locator;

  //constructor

  constructor(page:Page)
  {
    this.page = page;
    this.lblTotalPrice = this.page.locator("/html[1]/body[1]/div[2]/div[2]/div[1]/div[2]/div[1]/table[1]/tbody[1]/tr[4]/td[2]")
    this.btnCheckout = this.page.locator('a.btn.btn-primary')
  }

  async DisplayTotalPrice()
  { try{
    const tp=await this.lblTotalPrice.textContent()
  }catch(error){
    console.log(`Unable to get Total Price ${error}`)
    return null;
  }
  }

  async clickOnCheckout()
  {
    await this.btnCheckout.click()
  }

  /**
     * Verify if shopping cart page is loaded
     * @returns Promise<boolean> - true if page is loaded
     */
    async isPageLoaded(): Promise<boolean> {
        try {
            return await this.btnCheckout.isVisible();
        } catch (error) {
            return false;
        }
    }

}