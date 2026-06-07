# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> End To End Test Workflow
- Location: tests\EndToEndTest.spec.ts:113:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//a[text()=\'Register\']')

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: End-to-End Test on Demo E-commerce Application
  3   |  *
  4   |  * Purpose:
  5   |  * This test simulates a complete user flow on an e-commerce site.
  6   |  * 
  7   |  * Steps:
  8   |  * 1) Register a new account
  9   |  * 2) Logout after registration
  10  |  * 3) Login with the same account
  11  |  * 4) Search for a product and add it to the shopping cart
  12  |  * 5) Verify cart contents
  13  |  * 6) Attempt checkout (disabled since feature isn't available on demo site)
  14  |  */
  15  | 
  16  | import {test,expect,Page,Locator} from "@playwright/test"
  17  | 
  18  | import { Homepage } from "../Pages/Homepage"
  19  | import { LoginPage } from "../Pages/LoginPage"
  20  | import { Logout } from "../Pages/Logout"
  21  | import { MyAccountPage } from "../Pages/MyAccountPage"
  22  | import { ProductPage } from "../Pages/ProductPage.spec"
  23  | import { Registration } from "../Pages/RegistrationPage"
  24  | import { searchProductNameInSearchField } from "../Pages/SearchProductPage"
  25  | import { ShoppingCartPage } from "../Pages/ShoppingCartPage"
  26  | import { TestConfig } from "../test.config"
  27  | import { DataProvider } from "../Utils/Dataprovider"
  28  | import { randomDataUtil } from "../Utils/randomDataGenerator"
  29  | 
  30  | test.beforeEach("Launch URL" , async ({page})=> {
  31  | 
  32  |     const testconfig = new TestConfig()
  33  |     await page.goto(testconfig.appUrl)
  34  | 
  35  | })
  36  | 
  37  | test.afterEach("Close Browser" , async ({page}) => {
> 38  |     await page.waitForTimeout(5000)
      |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  39  |     await page.close()
  40  | })
  41  | 
  42  | 
  43  | 
  44  |     async function RegistrationWorkflow(page:Page)
  45  |     {
  46  |        const homepage  = new Homepage(page)
  47  |        await homepage.clickonMyAccount()  
  48  |        await homepage.clickOnMyRegister()
  49  | 
  50  |        const register = new Registration(page)
  51  |        
  52  |        await register.fillFirstName(randomDataUtil.getFirstName())
  53  |        await register.fillLastName(randomDataUtil.getLastName())
  54  | 
  55  |        let Newemail:string = randomDataUtil.getEmail()
  56  |        await register.fillEmail(Newemail)
  57  |        await register.fillTelephone(randomDataUtil.getPhoneNumber())
  58  |        await register.fillpwd("test@123")
  59  |        await register.fillconfirmPwd("test@123")
  60  |        await register.checkedPolicy()
  61  |        await register.ContinueBtn()
  62  | 
  63  |        await register.confirmationMessage()
  64  | 
  65  |        return Newemail;
  66  |     
  67  |     }
  68  |     async function Performlogout(page:Page)
  69  |     {
  70  |         const logout = new Logout(page)
  71  |         await logout.ClickonContinueButton()
  72  |         await logout.visibilityofAccountHeading()
  73  |     }
  74  | 
  75  |     async function Performlogin(page:Page, Newemail: string)
  76  |     {
  77  |          const testconfig = new TestConfig()
  78  |          await page.goto(testconfig.appUrl)
  79  | 
  80  |          const homepage  = new Homepage(page)
  81  |          await homepage.clickonMyAccount()  
  82  |          await homepage.clickOnLogin()
  83  | 
  84  |          const login = new LoginPage(page) 
  85  |          await login.LoginApplication(Newemail, "test@123")
  86  | 
  87  |     }
  88  | 
  89  |     async function AddproductToCart(page:Page)
  90  |     {
  91  |         const homepage = new Homepage(page)
  92  |         const testconfig = new TestConfig()
  93  |         homepage.searchProductNameInSearchField(testconfig.productName)
  94  |         homepage.ClickontheSearchButton()
  95  | 
  96  |         const productselect = new searchProductNameInSearchField(page)
  97  |         productselect.selectProduct(testconfig.productName)
  98  | 
  99  |         const addtocart = new ProductPage(page)
  100 |         addtocart.QuantityofProduct(testconfig.productQuantity)
  101 |         addtocart.clickonAddToCart()
  102 |         addtocart.visibilityOfSuccessMessage()
  103 |         addtocart.clickonAddItem()
  104 |         addtocart.clickonViewCart()
  105 | 
  106 |         const shopcart = new ShoppingCartPage(page)
  107 |         shopcart.DisplayTotalPrice()
  108 |         shopcart.clickOnCheckout()
  109 |         shopcart.isPageLoaded()
  110 |     }
  111 |     
  112 | 
  113 | test("End To End Test Workflow" , async ({page}) => {
  114 | 
  115 |     let testconfig = new TestConfig()
  116 |     await page.goto(testconfig.appUrl)
  117 | 
  118 |     //1
  119 |     await RegistrationWorkflow(page)
  120 | 
  121 |     //2 
  122 |     await Performlogout(page)
  123 | 
  124 |     //3 
  125 |     const NewEmail = await RegistrationWorkflow(page);
  126 |     await Performlogin(page,NewEmail)
  127 | 
  128 |     //4
  129 |     await AddproductToCart(page)
  130 | 
  131 | 
  132 | 
  133 | 
  134 | 
  135 | })
  136 | 
  137 | 
  138 |         
```