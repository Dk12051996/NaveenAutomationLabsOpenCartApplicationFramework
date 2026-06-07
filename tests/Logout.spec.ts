/**
 * Test Case: User Logout
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials
 * 4) Verify 'My Account' page
 * 5) Click on Logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to Home Page
 */

import {test,expect,Page,Locator} from "@playwright/test"
import { TestConfig } from "../test.config"
import { Homepage } from "../Pages/Homepage"
import { LoginPage } from "../Pages/LoginPage"
import { MyAccountPage } from "../Pages/MyAccountPage"
import { Logout } from "../Pages/Logout"

let testconfig : TestConfig;
let homepage : Homepage;
let login : LoginPage;
test.beforeEach("Launch URL" , async ({page})=> {

    const testconfig = new TestConfig()
    await page.goto(testconfig.appUrl)

})

test.afterEach("Close Browser" , async ({page}) => {
    await page.waitForTimeout(5000)
    await page.close()
})

test("End-To-End Flow" , async ({page}) => {

const homepage = new Homepage(page)
homepage.clickonMyAccount()
homepage.clickOnLogin()

const login = new LoginPage(page)
const testconfig1 = new TestConfig()
login.LoginApplication(testconfig1.email, testconfig1.password)
await page.waitForTimeout(2000)

const myaccountpage = new MyAccountPage(page)
myaccountpage.HeadingMyAccount()
myaccountpage.LogoutfromApplication()

const logout = new Logout(page)
logout.ClickonContinueButton()

const homepage1 = new Homepage(page)
homepage1.isHomePageExists()


})