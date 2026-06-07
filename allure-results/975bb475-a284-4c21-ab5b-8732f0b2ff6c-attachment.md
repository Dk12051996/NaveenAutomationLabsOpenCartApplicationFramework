# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> End To End Test Workflow
- Location: tests\EndToEndTest.spec.ts:118:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://naveenautomationlabs.com/opencart/", waiting until "load"

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
  44  |          const log = new LoginPage(page)
  45  |          const testconfig = new TestConfig()
  46  |          await log.LoginApplication(testconfig.email,testconfig.password)
  47  |     }
  48  | 
  49  |     async function RegistrationWorkflow(page:Page)
  50  |     {
  51  |        const homepage  = new Homepage(page)
  52  |        await homepage.clickonMyAccount()  
  53  |        await homepage.clickOnMyRegister()
  54  | 
  55  |        const register = new Registration(page)
  56  |        
  57  |        await register.fillFirstName(randomDataUtil.getFirstName())
  58  |        await register.fillLastName(randomDataUtil.getLastName())
  59  | 
  60  |        let Newemail:string = randomDataUtil.getEmail()
  61  |        await register.fillEmail(Newemail)
  62  |        await register.fillTelephone(randomDataUtil.getPhoneNumber())
  63  |        await register.fillpwd("test@123")
  64  |        await register.fillconfirmPwd("test@123")
  65  |        await register.checkedPolicy()
  66  |        await register.ContinueBtn()
  67  | 
  68  |        await register.confirmationMessage()
  69  | 
  70  |        return Newemail;
  71  |     
  72  |     }
  73  |     async function Performlogout(page:Page)
  74  |     {
  75  |         const logout = new Logout(page)
  76  |         await logout.ClickonContinueButton()
  77  |         await logout.visibilityofAccountHeading()
  78  |     }
  79  | 
  80  |     async function Performlogin(page:Page, Newemail: string)
  81  |     {
  82  |          const testconfig = new TestConfig()
  83  |          await page.goto(testconfig.appUrl)
  84  | 
  85  |          const homepage  = new Homepage(page)
  86  |          await homepage.clickonMyAccount()  
  87  |          await homepage.clickOnLogin()
  88  | 
  89  |          const login = new LoginPage(page) 
  90  |          await login.LoginApplication(Newemail, "test@123")
  91  | 
  92  |     }
  93  | 
  94  |     async function AddproductToCart(page:Page)
  95  |     {
  96  |         const homepage = new Homepage(page)
  97  |         const testconfig = new TestConfig()
  98  |         homepage.searchProductNameInSearchField(testconfig.productName)
  99  |         homepage.ClickontheSearchButton()
  100 | 
  101 |         const productselect = new searchProductNameInSearchField(page)
  102 |         productselect.selectProduct(testconfig.productName)
  103 | 
  104 |         const addtocart = new ProductPage(page)
  105 |         addtocart.QuantityofProduct(testconfig.productQuantity)
  106 |         addtocart.clickonAddToCart()
  107 |         addtocart.visibilityOfSuccessMessage()
  108 |         addtocart.clickonAddItem()
  109 |         addtocart.clickonViewCart()
  110 | 
  111 |         const shopcart = new ShoppingCartPage(page)
  112 |         shopcart.DisplayTotalPrice()
  113 |         shopcart.clickOnCheckout()
  114 |         shopcart.isPageLoaded()
  115 |     }
  116 |     
  117 | 
  118 | test("End To End Test Workflow" , async ({page}) => {
  119 | 
  120 |     let testconfig = new TestConfig()
  121 |     await page.goto(testconfig.appUrl)
  122 | 
  123 |     //1
  124 |     await Login(page)
  125 |     await RegistrationWorkflow(page)
  126 | 
  127 |     //2 
  128 |     await Performlogout(page)
  129 | 
  130 |     //3 
  131 |     const NewEmail = await RegistrationWorkflow(page);
  132 |     await Performlogin(page,NewEmail)
  133 | 
  134 |     //4
  135 |     await AddproductToCart(page)
  136 | 
  137 | 
  138 | 
```