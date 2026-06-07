# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Account Registration Test Case
- Location: tests\AccountRegistration.spec.ts:10:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Your Account Has Been Created!"
Received: Promise {}
```

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for locator('//h1[text()=\'Your Account Has Been Created!\']')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - link "naveenopencart" [ref=e33] [cursor=pointer]:
        - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
        - img "naveenopencart" [ref=e34]
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
      - listitem [ref=e72]:
        - link "Register" [ref=e73] [cursor=pointer]:
          - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Register Account" [level=1] [ref=e76]
        - paragraph [ref=e77]:
          - text: If you already have an account with us, please login at the
          - link "login page" [ref=e78] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
          - text: .
        - generic [ref=e79]:
          - group "Your Personal Details" [ref=e80]:
            - generic [ref=e81]: Your Personal Details
            - text: "*"
            - generic [ref=e82]:
              - generic [ref=e83]: "* First Name"
              - textbox "* First Name" [ref=e85]:
                - /placeholder: First Name
                - text: Timmy
            - generic [ref=e86]:
              - generic [ref=e87]: "* Last Name"
              - textbox "* Last Name" [ref=e89]:
                - /placeholder: Last Name
                - text: Torphy
            - generic [ref=e90]:
              - generic [ref=e91]: "* E-Mail"
              - textbox "* E-Mail" [ref=e93]:
                - /placeholder: E-Mail
                - text: Aniya_Gislason@gmail.com
            - generic [ref=e94]:
              - generic [ref=e95]: "* Telephone"
              - generic [ref=e96]:
                - textbox "* Telephone" [ref=e97]:
                  - /placeholder: Telephone
                - generic [ref=e98]: Telephone must be between 3 and 32 characters!
          - group "Your Password" [ref=e99]:
            - generic [ref=e100]: Your Password
            - generic [ref=e101]:
              - generic [ref=e102]: "* Password"
              - textbox "* Password" [ref=e104]:
                - /placeholder: Password
                - text: (427) 293-5926 x4120DipAAmKO7tJvHkI
            - generic [ref=e105]:
              - generic [ref=e106]: "* Password Confirm"
              - generic [ref=e107]:
                - textbox "* Password Confirm" [ref=e108]:
                  - /placeholder: Password Confirm
                  - text: DipAAmKO7tJvHkI
                - generic [ref=e109]: Password confirmation does not match password!
          - group "Newsletter" [ref=e110]:
            - generic [ref=e111]: Newsletter
            - generic [ref=e112]:
              - generic [ref=e113]: Subscribe
              - generic [ref=e114]:
                - generic [ref=e115] [cursor=pointer]:
                  - radio "Yes" [ref=e116]
                  - text: "Yes"
                - generic [ref=e117] [cursor=pointer]:
                  - radio "No" [checked] [ref=e118]
                  - text: "No"
          - generic [ref=e119]:
            - text: I have read and agree to the
            - link "Privacy Policy" [ref=e120] [cursor=pointer]:
              - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information/agree&information_id=3
            - checkbox [checked] [ref=e121]
            - button "Continue" [ref=e122] [cursor=pointer]
      - complementary [ref=e123]:
        - generic [ref=e124]:
          - link "Login" [ref=e125] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/login
          - link "Register" [ref=e126] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/register
          - link "Forgotten Password" [ref=e127] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/forgotten
          - link "My Account" [ref=e128] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
          - link "Address Book" [ref=e129] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/address
          - link "Wish List" [ref=e130] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
          - link "Order History" [ref=e131] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
          - link "Downloads" [ref=e132] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/download
          - link "Recurring payments" [ref=e133] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/recurring
          - link "Reward Points" [ref=e134] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/reward
          - link "Returns" [ref=e135] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return
          - link "Transactions" [ref=e136] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/transaction
          - link "Newsletter" [ref=e137] [cursor=pointer]:
            - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
  - contentinfo [ref=e138]:
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]:
          - heading "Information" [level=5] [ref=e142]
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "About Us" [ref=e145] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=4
            - listitem [ref=e146]:
              - link "Delivery Information" [ref=e147] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=6
            - listitem [ref=e148]:
              - link "Privacy Policy" [ref=e149] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=3
            - listitem [ref=e150]:
              - link "Terms & Conditions" [ref=e151] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/information&information_id=5
        - generic [ref=e152]:
          - heading "Customer Service" [level=5] [ref=e153]
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Contact Us" [ref=e156] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/contact
            - listitem [ref=e157]:
              - link "Returns" [ref=e158] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/return/add
            - listitem [ref=e159]:
              - link "Site Map" [ref=e160] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=information/sitemap
        - generic [ref=e161]:
          - heading "Extras" [level=5] [ref=e162]
          - list [ref=e163]:
            - listitem [ref=e164]:
              - link "Brands" [ref=e165] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/manufacturer
            - listitem [ref=e166]:
              - link "Gift Certificates" [ref=e167] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/voucher
            - listitem [ref=e168]:
              - link "Affiliate" [ref=e169] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=affiliate/login
            - listitem [ref=e170]:
              - link "Specials" [ref=e171] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=product/special
        - generic [ref=e172]:
          - heading "My Account" [level=5] [ref=e173]
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link "My Account" [ref=e176] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/account
            - listitem [ref=e177]:
              - link "Order History" [ref=e178] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/order
            - listitem [ref=e179]:
              - link "Wish List" [ref=e180] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/wishlist
            - listitem [ref=e181]:
              - link "Newsletter" [ref=e182] [cursor=pointer]:
                - /url: https://naveenautomationlabs.com/opencart/index.php?route=account/newsletter
      - separator [ref=e183]
      - paragraph [ref=e184]:
        - text: Powered By
        - link "OpenCart" [ref=e185] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: naveenopencart © 2026
```

# Test source

```ts
  1  | import {test,expect, Page, Locator} from '@playwright/test'
  2  | 
  3  | export class Registration
  4  | {
  5  |     //Variable
  6  |     private readonly page;
  7  |     private readonly firstName;
  8  |     private readonly LastName;
  9  |     private readonly Email;
  10 |     private readonly Telephone;
  11 |     private readonly pwd;
  12 |     private readonly confirmpwd;
  13 |     private readonly chkpolicy;
  14 |     private readonly continue;
  15 |     private readonly cfmsg;
  16 | 
  17 |     //Constructors
  18 | 
  19 |     constructor(page:Page)
  20 |     {
  21 |         this.page = page;
  22 |         this.firstName = this.page.locator("#input-firstname")
  23 |         this.LastName = this.page.locator("#input-lastname")
  24 |         this.Email = this.page.locator("#input-email")
  25 |         this.Telephone = this.page.locator("#input-telephone")
  26 |         this.pwd = this.page.locator("#input-password")
  27 |         this.confirmpwd = this.page.locator("#input-confirm")
  28 |         this.chkpolicy = this.page.locator("//input[@name='agree']")
  29 |         this.continue = this.page.locator("//input[@value='Continue']")
  30 |         this.cfmsg = this.page.locator("//h1[text()='Your Account Has Been Created!']")
  31 |     }
  32 | 
  33 |     //Action Method
  34 | 
  35 |     async fillFirstName(fName:string)
  36 |     {
  37 |         await this.firstName.fill(fName)
  38 |     }
  39 | 
  40 |     async fillLastName(lName:string)
  41 |     {
  42 |         await this.LastName.fill(lName)
  43 |     }
  44 | 
  45 |     async fillEmail(email:string)
  46 |     {
  47 |         await this.Email.fill(email)
  48 |     }
  49 | 
  50 |     async fillTelephone(tel : string)
  51 |     {
  52 |         this.Telephone.fill(tel)
  53 |     }
  54 | 
  55 |     async fillpwd(passwd : string)
  56 |     {
  57 |         await this.pwd.fill(passwd)
  58 |     }
  59 | 
  60 |     async fillconfirmPwd(cpasswd : string)
  61 |     {
  62 |         await this.confirmpwd.fill(cpasswd)
  63 |     }
  64 | 
  65 |     async checkedPolicy()
  66 |     {
  67 |         await this.chkpolicy.click()
  68 |     }
  69 | 
  70 |     async ContinueBtn()
  71 |     {
  72 |         await this.continue.click()
  73 |     }
  74 | 
  75 |     async confirmationMessage()
  76 |     {
> 77 |         const message = this.cfmsg.textContent()
     |                                    ^ Error: locator.textContent: Test ended.
  78 |         await expect(message).toBe("Your Account Has Been Created!")
  79 |     }
  80 | 
  81 |     async RegistrationForm(userdata :{
  82 |         fName:string, lName:string, email:string, tel:string, passwd:string, cpasswd:string 
  83 |                                     })
  84 |     {
  85 |         await this.fillFirstName(userdata.fName)
  86 |         await this.fillLastName(userdata.lName)
  87 |         await this.fillEmail(userdata.email)
  88 |         await this.fillTelephone(userdata.tel)
  89 |         await this.fillpwd(userdata.passwd)
  90 |         await this.fillconfirmPwd(userdata.cpasswd)
  91 |         await this.checkedPolicy()
  92 |         await this.ContinueBtn()
  93 |         await this.confirmationMessage()
  94 |     }
  95 |     
  96 | 
  97 | 
  98 | }
```