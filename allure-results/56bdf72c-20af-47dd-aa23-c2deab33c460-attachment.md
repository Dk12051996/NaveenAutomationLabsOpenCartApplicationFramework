# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> End To End Test Workflow
- Location: tests\EndToEndTest.spec.ts:123:5

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
  42  |     async function Login(page:Page)
  43  |     {
  44  | 
  45  |          const log = new LoginPage(page)
  46  |          const testconfig = new TestConfig()
  47  |          const homepage  = new Homepage(page)
  48  |          await homepage.clickonMyAccount()  
  49  |          await homepage.clickOnLogin()
  50  | 
  51  |          await log.LoginApplication(testconfig.email,testconfig.password)
  52  |     }
  53  | 
  54  |     async function RegistrationWorkflow(page:Page)
  55  |     {
  56  |        const homepage  = new Homepage(page)
  57  |        await homepage.clickonMyAccount()  
  58  |        await homepage.clickOnMyRegister()
  59  | 
  60  |        const register = new Registration(page)
  61  |        
  62  |        await register.fillFirstName(randomDataUtil.getFirstName())
  63  |        await register.fillLastName(randomDataUtil.getLastName())
  64  | 
  65  |        let Newemail:string = randomDataUtil.getEmail()
  66  |        await register.fillEmail(Newemail)
  67  |        await register.fillTelephone(randomDataUtil.getPhoneNumber())
  68  |        await register.fillpwd("test@123")
  69  |        await register.fillconfirmPwd("test@123")
  70  |        await register.checkedPolicy()
  71  |        await register.ContinueBtn()
  72  | 
  73  |        await register.confirmationMessage()
  74  | 
  75  |        return Newemail;
  76  |     
  77  |     }
  78  |     async function Performlogout(page:Page)
  79  |     {
  80  |         const logout = new Logout(page)
  81  |         await logout.ClickonContinueButton()
  82  |         await logout.visibilityofAccountHeading()
  83  |     }
  84  | 
  85  |     async function Performlogin(page:Page, Newemail: string)
  86  |     {
  87  |          const testconfig = new TestConfig()
  88  |          await page.goto(testconfig.appUrl)
  89  | 
  90  |          const homepage  = new Homepage(page)
  91  |          await homepage.clickonMyAccount()  
  92  |          await homepage.clickOnLogin()
  93  | 
  94  |          const login = new LoginPage(page) 
  95  |          await login.LoginApplication(Newemail, "test@123")
  96  | 
  97  |     }
  98  | 
  99  |     async function AddproductToCart(page:Page)
  100 |     {
  101 |         const homepage = new Homepage(page)
  102 |         const testconfig = new TestConfig()
  103 |         homepage.searchProductNameInSearchField(testconfig.productName)
  104 |         homepage.ClickontheSearchButton()
  105 | 
  106 |         const productselect = new searchProductNameInSearchField(page)
  107 |         productselect.selectProduct(testconfig.productName)
  108 | 
  109 |         const addtocart = new ProductPage(page)
  110 |         addtocart.QuantityofProduct(testconfig.productQuantity)
  111 |         addtocart.clickonAddToCart()
  112 |         addtocart.visibilityOfSuccessMessage()
  113 |         addtocart.clickonAddItem()
  114 |         addtocart.clickonViewCart()
  115 | 
  116 |         const shopcart = new ShoppingCartPage(page)
  117 |         shopcart.DisplayTotalPrice()
  118 |         shopcart.clickOnCheckout()
  119 |         shopcart.isPageLoaded()
  120 |     }
  121 |     
  122 | 
  123 | test("End To End Test Workflow" , async ({page}) => {
  124 | 
  125 |     let testconfig = new TestConfig()
  126 |     await page.goto(testconfig.appUrl)
  127 | 
  128 |     //1
  129 |     await Login(page)
  130 |     await RegistrationWorkflow(page)
  131 | 
  132 |     //2 
  133 |     await Performlogout(page)
  134 | 
  135 |     //3 
  136 |     const NewEmail = await RegistrationWorkflow(page);
  137 |     await Performlogin(page,NewEmail)
  138 | 
```