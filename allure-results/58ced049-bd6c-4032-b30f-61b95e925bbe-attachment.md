# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> End To End Test Workflow
- Location: tests\EndToEndTest.spec.ts:123:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test,expect,Page,Locator} from "@playwright/test"
  2  | 
  3  | export class ProductPage {
  4  | 
  5  |     //Variable
  6  |     private readonly page:Page;
  7  |     private readonly txtQuantity : Locator;
  8  |     private readonly AddToCartBtn : Locator;
  9  |     private readonly successMessage : Locator;
  10 |     private readonly AddedItemBtn : Locator;
  11 |     private readonly viewCartBtn : Locator;
  12 | 
  13 |     //constructor
  14 |     constructor(page:Page)
  15 |     {
  16 |         this.page = page;
  17 |         this.txtQuantity = this.page.locator("#input-quantity")
  18 |         this.AddToCartBtn = this.page.locator("#button-cart")
  19 |         this.successMessage = this.page.locator("//div[@class='alert alert-success alert-dismissible']")
  20 |         this.AddedItemBtn = this.page.locator("span#cart-total")
  21 |         this.viewCartBtn = this.page.locator('strong:has-text("View Cart")');
  22 |     }
  23 | 
  24 |     //Action Methods
  25 | 
  26 |     async QuantityofProduct(Qty:string)
  27 |     {
> 28 |         await this.txtQuantity.fill('')
     |                                ^ Error: locator.fill: Target page, context or browser has been closed
  29 |         await this.txtQuantity.fill(Qty)
  30 |     }
  31 | 
  32 |     async clickonAddToCart()
  33 |     {
  34 |         await this.AddToCartBtn.click()
  35 |     }
  36 | 
  37 |     async visibilityOfSuccessMessage()
  38 |     {
  39 |     try {
  40 |             if(this.successMessage!=null){
  41 |                  return true;
  42 |             }
  43 |             else{
  44 |                 return false;
  45 |             }//await expect(this.cnfMsg).toBeVisible();
  46 |            
  47 |         } catch (error) {
  48 |             console.log(`Confirmation message not found: ${error}`);
  49 |             return false;
  50 |         }
  51 |     }
  52 | 
  53 |     async clickonAddItem()
  54 |     {
  55 |         await this.AddedItemBtn.click()
  56 |     }
  57 | 
  58 |     async clickonViewCart()
  59 |     {
  60 |         await this.viewCartBtn.click()
  61 |     }
  62 | 
  63 |     
  64 |     
  65 | }
```