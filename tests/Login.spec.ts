import { test, expect } from "@playwright/test"
import { Homepage } from "../Pages/Homepage"
import { LoginPage } from "../Pages/LoginPage"
import { MyAccountPage } from "../Pages/MyAccountPage"
import { TestConfig } from "../test.config"

let testconfig: TestConfig;
let homepage : Homepage;
let login : LoginPage;
let myaccountpage : MyAccountPage;


test.beforeEach("Launch URL", async ({ page }) => {
    let testconfig = new TestConfig()
    await page.goto(testconfig.appUrl)

})

test.afterEach("close Application" , async ({page}) => {

    await page.waitForTimeout(3000)
    await page.close();
})

test("Login into the Opencart Application @sanity", async ({ page }) => {

    let homepage = new Homepage(page)
    await homepage.clickonMyAccount()
    await homepage.clickOnLogin()

    let login = new LoginPage(page)
    let cred = new TestConfig()
    await login.LoginApplication(cred.email,cred.password)

    let myaccountpage = new MyAccountPage(page)
    myaccountpage.HeadingMyAccount()

    

})