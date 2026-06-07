# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Account Registration Test Case
- Location: tests\AccountRegistration.spec.ts:26:5

# Error details

```
ReferenceError: page is not defined
```

# Test source

```ts
  1  | //Test Case "Account registration"
  2  | 
  3  | 
  4  | import {test,expect} from "@playwright/test"
  5  | import { Homepage } from "../Pages/Homepage"
  6  | import { Registration } from "../Pages/RegistrationPage"
  7  | import {randomDataUtil} from "../Utils/randomDataGenerator"
  8  | import { TestConfig } from "../test.config"
  9  | 
  10 | let Home : Homepage;
  11 | let reg : Registration;
  12 | 
  13 | test.beforeEach(async ({page}) => {
  14 | const config = new TestConfig()
  15 | await page.goto(config.appUrl)
  16 | 
  17 |  Home = new Homepage(page)
  18 |  reg = new Registration(page)
  19 | })
  20 | 
  21 | test.afterEach(async({page})=> {
  22 |     await page.close()
  23 | })
  24 | 
  25 | 
  26 | test("Account Registration Test Case" , async ({}) => {
  27 | 
  28 |     
  29 | 
  30 |    
  31 |     await Home.clickonMyAccount()
  32 |     await Home.clickOnMyRegister()
  33 | 
  34 |     
  35 |     await reg.fillFirstName(randomDataUtil.getFirstName())
  36 |     await reg.fillLastName(randomDataUtil.getLastName())
  37 |     await reg.fillEmail(randomDataUtil.getEmail())
  38 |     await reg.fillTelephone(randomDataUtil.getPhoneNumber())
  39 | 
  40 |     const password = randomDataUtil.getPassword()
  41 |     await reg.fillpwd(password)
  42 |     await reg.fillconfirmPwd(password)
  43 | 
  44 |     await reg.checkedPolicy()
  45 |     await reg.ContinueBtn()
  46 | 
  47 |     
  48 |     const cfmmessafe = await (await reg.confirmationMessage()).trim()
  49 |     await expect(cfmmessafe).toContain('Your Account Has Been Created!')
> 50 |     await page.waitForTimeout(5000)
     |     ^ ReferenceError: page is not defined
  51 |     
  52 | 
  53 | })
  54 | 
```