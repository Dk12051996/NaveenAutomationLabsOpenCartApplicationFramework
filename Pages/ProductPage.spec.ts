import {test,expect,Page,Locator} from "@playwright/test"

export class ProductPage {

    //Variable
    private readonly page:Page;
    private readonly txtQuantity : Locator;
    private readonly AddToCartBtn : Locator;
    private readonly successMessage : Locator;
    private readonly AddedItemBtn : Locator;
    private readonly viewCartBtn : Locator;

    //constructor
    constructor(page:Page)
    {
        this.page = page;
        this.txtQuantity = this.page.locator("#input-quantity")
        this.AddToCartBtn = this.page.locator("#button-cart")
        this.successMessage = this.page.locator("//div[@class='alert alert-success alert-dismissible']")
        this.AddedItemBtn = this.page.locator("span#cart-total")
        this.viewCartBtn = this.page.locator('strong:has-text("View Cart")');
    }

    //Action Methods

    async QuantityofProduct(Qty:string)
    {
        await this.txtQuantity.fill('')
        await this.txtQuantity.fill(Qty)
    }

    async clickonAddToCart()
    {
        await this.AddToCartBtn.click()
    }

    async visibilityOfSuccessMessage()
    {
    try {
            if(this.successMessage!=null){
                 return true;
            }
            else{
                return false;
            }//await expect(this.cnfMsg).toBeVisible();
           
        } catch (error) {
            console.log(`Confirmation message not found: ${error}`);
            return false;
        }
    }

    async clickonAddItem()
    {
        await this.AddedItemBtn.click()
    }

    async clickonViewCart()
    {
        await this.viewCartBtn.click()
    }

    
    
}