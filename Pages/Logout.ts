import {test,expect,Locator,Page} from "@playwright/test"

export class Logout{

    //Variables

    private readonly page:Page;
    private readonly HeadingAccountLogout;
    private readonly continuebutton;
    private readonly logoutbtn;


    //constructor

    constructor(page:Page)
    {
       this.page = page;
       this.HeadingAccountLogout = this.page.locator("//h1[text()='Account Logout']")
       this.continuebutton = this.page.locator("//a[text()='Continue']")
       this.logoutbtn = this.page.locator("//a[text()='Logout'][@class='list-group-item']")
    }

    //Action methods 
    async visibilityofAccountHeading()
    {
        await this.HeadingAccountLogout.isVisible()
    }

    async ClickonContinueButton()
    {
        await this.continuebutton.click()
    }

    async ClickLogoutButton()
    {
        await this.logoutbtn.click()
    }
}