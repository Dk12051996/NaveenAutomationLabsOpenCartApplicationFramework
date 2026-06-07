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
  - waiting for locator('//input[@value=\'Login\']')
    - locator resolved to <input type="submit" value="Login" class="btn btn-primary"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed

```

# Test source

```ts
  1  | import {test,expect,Page,Locator} from "@playwright/test"
  2  | 
  3  | export class LoginPage
  4  | {
  5  |     //Variables
  6  | 
  7  |     private readonly page:Page;
  8  |     private readonly EmailAddress : Locator;
  9  |     private readonly Password : Locator;
  10 |     private readonly Login : Locator;
  11 |     private readonly Errormsg : Locator
  12 | 
  13 |     // Constructor
  14 |     constructor(page:Page)
  15 |     {
  16 |         this.page = page;
  17 |         this.EmailAddress = this.page.locator("#input-email")
  18 |         this.Password = this.page.locator("#input-password")
  19 |         this.Login = this.page.locator("//input[@value='Login']")
  20 |         this.Errormsg = this.page.locator("//div[@class='alert alert-danger alert-dismissible']")
  21 |     }
  22 | 
  23 |     //Action Methods
  24 | 
  25 |     async fillLoginEmailAddress(email:string)
  26 |     {
  27 |         await this.EmailAddress.fill(email)
  28 |     }
  29 | 
  30 |     async fillLoginPassword(password:string)
  31 |     {
  32 |         await this.Password.fill(password)
  33 |     }
  34 | 
  35 |     async clickLoginBtn()
  36 |     {
> 37 |         await this.Login.click()
     |                          ^ Error: locator.click: Target page, context or browser has been closed
  38 |     }
  39 | 
  40 |     async LoginApplication(email:string, password:string)
  41 |     {
  42 |         await this.fillLoginEmailAddress(email)
  43 |         await this.fillLoginPassword(password)
  44 |         await this.clickLoginBtn()
  45 |         
  46 |     }
  47 | 
  48 |     async getLoginError()
  49 |     {
  50 |         return (this.Errormsg.textContent())
  51 |     }
  52 | }
```