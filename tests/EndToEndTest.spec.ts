/**
 * Test Case: End-to-End Test on Demo E-commerce Application
 *
 * Purpose:
 * This test simulates a complete user flow on an e-commerce site.
 * 
 * Steps:
 * 1) Register a new account
 * 2) Logout after registration
 * 3) Login with the same account
 * 4) Search for a product and add it to the shopping cart
 * 5) Verify cart contents
 * 6) Attempt checkout (disabled since feature isn't available on demo site)
 */

import {test,expect,Page,Locator} from "@playwright/test"

import { Homepage } from "../Pages/Homepage"
import { LoginPage } from "../Pages/LoginPage"
import { Logout } from "../Pages/Logout"
import { MyAccountPage } from "../Pages/MyAccountPage"
import { ProductPage } from "../Pages/ProductPage.spec"
import { Registration } from "../Pages/RegistrationPage"
import { searchProductNameInSearchField } from "../Pages/SearchProductPage"
import { ShoppingCartPage } from "../Pages/ShoppingCartPage"
import { TestConfig } from "../test.config"
import { DataProvider } from "../Utils/Dataprovider"
import { randomDataUtil } from "../Utils/randomDataGenerator"


test.beforeEach("Launch URL" , async ({page})=> {

    const testconfig = new TestConfig()
    await page.goto(testconfig.appUrl)

})

test.afterEach("Close Browser" , async ({page}) => {
    await page.waitForTimeout(5000)
    await page.close()
})

    /*async function Login(page:Page)
    {
         const log = new LoginPage(page)
         const testconfig = new TestConfig()
         await log.LoginApplication(testconfig.email,testconfig.password)
    } */

    async function RegistrationWorkflow(page:Page)
    {
       const homepage  = new Homepage(page)
       await homepage.clickonMyAccount()  
       await homepage.clickOnMyRegister()

       const register = new Registration(page)
       
       await register.fillFirstName(randomDataUtil.getFirstName())
       await register.fillLastName(randomDataUtil.getLastName())

       let Newemail:string = randomDataUtil.getEmail()
       await register.fillEmail(Newemail)
       await register.fillTelephone(randomDataUtil.getPhoneNumber())
       await register.fillpwd("test@123")
       await register.fillconfirmPwd("test@123")
       await register.checkedPolicy()
       await register.ContinueBtn()

       await register.confirmationMessage()

       return Newemail;
       //await page.close()
    
    }
    async function Performlogout(page:Page)
    {
        
        const myaccount = new MyAccountPage(page)
        const logout = await myaccount.LogoutfromApplication()
        await page.waitForTimeout(5000)
        
    } 

    async function Performlogin(page:Page, Newemail: string)
    {
         const testconfig = new TestConfig()
         await page.goto(testconfig.appUrl)

         const homepage1  = new Homepage(page)
         await homepage1.clickonMyAccount()
         //await page.waitForTimeout(3000)
         await homepage1.clickOnLogin()
         

         const login = new LoginPage(page) 
         await login.LoginApplication(Newemail, "test@123")

    }

    async function AddproductToCart(page:Page)
    {
        const homepage = new Homepage(page)
        const testconfig = new TestConfig()

        const productName : string = testconfig.productName
        const productqty :string = testconfig.productQuantity

        await homepage.searchProductNameInSearchField(testconfig.productName)
        await homepage.ClickontheSearchButton()

        

        const productselect = new searchProductNameInSearchField(page)
        await productselect.selectProduct(testconfig.productName)

        const addtocart = new ProductPage(page)
        await addtocart?.QuantityofProduct(productqty)
        await addtocart?.clickonAddToCart()
        await addtocart.visibilityOfSuccessMessage()
        await addtocart.clickonAddItem()
        await addtocart.clickonViewCart()

        const shopcart = new ShoppingCartPage(page)
       await shopcart.DisplayTotalPrice()
       await shopcart.clickOnCheckout()
       await shopcart.isPageLoaded()
    }
    

test("End To End Test Workflow" , async ({page}) => {

    let testconfig = new TestConfig()
    await page.goto(testconfig.appUrl)

    //1
    //await Login(page)
    await RegistrationWorkflow(page)

    //2 
    await Performlogout(page)

    //3 
   
    //const NewEmail = await RegistrationWorkflow(page);
     await Performlogin(page,'test12dk@gmail.com')

    //4
    await AddproductToCart(page)





})


        


    
    


