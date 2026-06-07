# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> End To End Test Workflow
- Location: tests\EndToEndTest.spec.ts:114:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//a[text()=\'Register\']') resolved to 2 elements:
    1) <a href="https://naveenautomationlabs.com/opencart/index.php?route=account/register">Register</a> aka locator('#top-links').getByRole('link', { name: 'Register' })
    2) <a class="list-group-item" href="https://naveenautomationlabs.com/opencart/index.php?route=account/register">Register</a> aka locator('#column-right').getByRole('link', { name: 'Register' })

Call log:
  - waiting for locator('//a[text()=\'Register\']')

```

# Test source

```ts
  1   | import {test, expect , Page, Locator} from "@playwright/test"
  2   | 
  3   | 
  4   | export class Homepage
  5   | {
  6   |     //Variable
  7   |     private readonly page : Page;
  8   |     private readonly myAccount : Locator;
  9   |     private readonly register : Locator;
  10  |     private readonly Login : Locator;
  11  |     private readonly searchField : Locator;
  12  |     private readonly searchIcon : Locator;
  13  | 
  14  |     //Constructor
  15  |     constructor(page:Page)
  16  |     {
  17  |         this.page = page;
  18  |         this.myAccount = this.page.locator("//span[text()='My Account']")
  19  |         this.register = this.page.locator("//a[text()='Register']")
  20  |         this.Login = this.page.locator("//a[text()='Login']")
  21  |         this.searchField = this.page.locator("//input[@name='search']")
  22  |         this.searchIcon = this.page.locator("//button[@class='btn btn-default btn-lg']")
  23  |     }
  24  | 
  25  |     //Action Methods 
  26  |     async isHomePageExists()
  27  |     {
  28  |         let title:string = await this.page.title()
  29  |         if(title)
  30  |         {
  31  |             return true;
  32  |         }
  33  |         return false;
  34  |     }
  35  | 
  36  |     async clickonMyAccount()
  37  |     {
  38  |         try{
  39  |       await this.myAccount.click()
  40  |         }
  41  |         catch(error) {
  42  |             console.log(`Exception Occurs when clicking on My Account : , ${error}`)  
  43  |             throw error;
  44  |         }
  45  |     }
  46  | 
  47  |     async clickOnMyRegister()
  48  |     {
  49  |         try{
> 50  |         await this.register.click()
      |                             ^ Error: locator.click: Error: strict mode violation: locator('//a[text()=\'Register\']') resolved to 2 elements:
  51  |         }
  52  |         catch(error)
  53  |         {
  54  |             console.log(`Error Occurs while click on the Register : ${error}`)
  55  |             throw error;
  56  |         }
  57  |     }
  58  | 
  59  |     async clickOnLogin()
  60  |     { 
  61  |         try{
  62  |         this.Login.click()
  63  |            }
  64  |        catch(error)
  65  |        {
  66  |         console.log(`Exception occurs while click on Login : ${error}`)
  67  |         throw error;
  68  |        }
  69  |     }
  70  | 
  71  |     async searchProductNameInSearchField(pName:string)
  72  |     {
  73  |         try{
  74  |             await this.searchField.fill(pName)
  75  |         }
  76  |         catch(error)
  77  |         {
  78  |             console.log(`Error occurs while fill the Product Name in the Serach Field : ${error}`)
  79  |             throw error;
  80  |         }
  81  |     }
  82  | 
  83  |     async ClickontheSearchButton()
  84  |     {
  85  |         try{
  86  |             await this.searchIcon.click()
  87  |         }
  88  |         catch(error)
  89  |         {
  90  |             console.log(`The Error Occurs while click on the Serach Icon : ${error}`)
  91  |             throw error;
  92  |         }
  93  |     }
  94  | 
  95  | 
  96  | 
  97  | 
  98  |     
  99  |     
  100 | }
```