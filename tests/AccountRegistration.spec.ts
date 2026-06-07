//Test Case "Account registration"
/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */


import {test,expect} from "@playwright/test"
import { Homepage } from "../Pages/Homepage"
import { Registration } from "../Pages/RegistrationPage"
import {randomDataUtil} from "../Utils/randomDataGenerator"
import { TestConfig } from "../test.config"

let Home : Homepage;
let reg : Registration;

test.beforeEach(async ({page}) => {
const config = new TestConfig()
await page.goto(config.appUrl)

 Home = new Homepage(page)
 reg = new Registration(page)
})

test.afterEach(async({page})=> {
    await page.waitForTimeout(5000)
    await page.close()
})


test('Account Registration Test Case @sanity @regression @master' , async ({}) => {

    

   
    await Home.clickonMyAccount()
    await Home.clickOnMyRegister()

    
    await reg.fillFirstName(randomDataUtil.getFirstName())
    await reg.fillLastName(randomDataUtil.getLastName())
    await reg.fillEmail(randomDataUtil.getEmail())
    await reg.fillTelephone(randomDataUtil.getPhoneNumber())

    const password = randomDataUtil.getPassword()
    await reg.fillpwd(password)
    await reg.fillconfirmPwd(password)

    await reg.checkedPolicy()
    await reg.ContinueBtn()

    
    const cfmmessafe = await (await reg.confirmationMessage()).trim()
    await expect(cfmmessafe).toContain('Your Account Has Been Created!')
    
    

})
