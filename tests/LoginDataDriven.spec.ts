import { test, expect, Page } from "@playwright/test"

import { LoginPage } from "../Pages/LoginPage"
import { MyAccountPage } from "../Pages/MyAccountPage"
import { DataProvider } from "../Utils/Dataprovider"
import { TestConfig } from "../test.config"
import { Homepage } from "../Pages/Homepage"
import path from 'path';

//Load JSON test data logindata.json
const jsonpath = path.join(process.cwd(), 'TestData', 'logindata.json');
const csvpath = path.join(process.cwd(), 'TestData', 'logindata.csv');
/*
const jsonpath = "D:/NaveenAutomationLabsOpenCart/TestData/logindata.json"
const csvpath = "D:/NaveenAutomationLabsOpenCart/TestData/logindata.csv"
*/
const jsontestData = DataProvider.getTestDataFromJSON(jsonpath)
const csvtestData = DataProvider.getTestDataFromCSV(csvpath)

for (const data of csvtestData) //json testData replace with csv Test Data
    {
    test(`Login Data through JSON Data File ${data.testName}`, async ({ page }) => {

        const testconfig = new TestConfig()
        await page.goto(testconfig.appUrl)

        const homepage = new Homepage(page)
        await page.goto(testconfig.appUrl)
        await homepage.clickonMyAccount()
        await homepage.clickOnLogin()

        const login = new LoginPage(page)
        await login.LoginApplication(data.email, data.password)

        if (data.expected.toLowerCase() === 'success') {
            const myaccountpage = new MyAccountPage(page)
            await myaccountpage.HeadingMyAccount()
        }

        else {
            const loginpage = new LoginPage(page)
            const ErrorMessage = await loginpage.getLoginError()
            await expect(ErrorMessage).toBeTruthy()
        }

    })
}
