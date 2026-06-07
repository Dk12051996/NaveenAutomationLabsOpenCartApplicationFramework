# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logout.spec.ts >> End-To-End Flow
- Location: tests\Logout.spec.ts:38:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//a[@class=\'list-group-item\'][text()=\'Logout\']')
    - waiting for" https://naveenautomationlabs.com/opencart/index.php?route=account/login" navigation to finish...
    - navigated to "https://naveenautomationlabs.com/opencart/index.php?route=account/login"

```

# Test source

```ts
  1  | import {test,expect,Page,Locator} from "@playwright/test"
  2  | 
  3  | export class MyAccountPage
  4  | {
  5  |     //Variable
  6  | 
  7  |     private readonly page:Page;
  8  |     private readonly msgHeading : Locator;
  9  |     private readonly Logout : Locator;
  10 | 
  11 |     //Locator
  12 |     constructor(page:Page)
  13 |     {
  14 |         this.page = page;
  15 |         this.msgHeading = this.page.locator("//h2[text()='My Account']");
  16 |         this.Logout = this.page.locator("//a[@class='list-group-item'][text()='Logout']");
  17 |     }
  18 | 
  19 |     //Action Method
  20 |     async HeadingMyAccount()
  21 |     {
  22 |         try{
  23 |         const isVisible = await this.msgHeading.isVisible()
  24 |         return isVisible;
  25 |         } catch(error)
  26 |         {
  27 |             console.log(`The Error occurs when the My Account Heading is not Visible : ${error}`)
  28 |             return false;
  29 |         }
  30 |     }
  31 | 
  32 |         async LogoutfromApplication()
  33 |         {
> 34 |             await this.Logout.click()
     |                               ^ Error: locator.click: Target page, context or browser has been closed
  35 |         }
  36 |         
  37 |     
  38 | 
  39 | }
```