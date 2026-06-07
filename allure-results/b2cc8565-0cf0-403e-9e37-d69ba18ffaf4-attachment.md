# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Account Registration Test Case
- Location: tests\AccountRegistration.spec.ts:10:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://naveenautomationlabs.com/opencart/", waiting until "load"

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
  10 | test("Account Registration Test Case" , async ({page}) => {
  11 | 
  12 |     const config = new TestConfig()
> 13 |     await page.goto(config.appUrl)
     |                ^ Error: page.goto: Target page, context or browser has been closed
  14 | 
  15 |     const Home = new Homepage(page)
  16 |     await Home.clickonMyAccount()
  17 |     await Home.clickOnMyRegister()
  18 | 
  19 |     const reg = new Registration(page)
  20 |     await reg.fillFirstName(randomDataUtil.getFirstName())
  21 |     await reg.fillLastName(randomDataUtil.getLastName())
  22 |     await reg.fillEmail(randomDataUtil.getEmail())
  23 |     await reg.fillTelephone(randomDataUtil.getPhoneNumber())
  24 | 
  25 |     const password = randomDataUtil.getPassword()
  26 |     await reg.fillpwd(password)
  27 |     await reg.fillconfirmPwd(password)
  28 | 
  29 |     await reg.checkedPolicy()
  30 |     await reg.ContinueBtn()
  31 | 
  32 |     await reg.confirmationMessage()
  33 | 
  34 | 
  35 | })
  36 | 
```