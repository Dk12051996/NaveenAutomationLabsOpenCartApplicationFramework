import {test,expect,Page,Locator} from "@playwright/test"

export class LoginPage
{
    //Variables

    private readonly page:Page;
    private readonly EmailAddress : Locator;
    private readonly Password : Locator;
    private readonly Login : Locator;
    private readonly Errormsg : Locator

    // Constructor
    constructor(page:Page)
    {
        this.page = page;
        this.EmailAddress = this.page.locator("#input-email")
        this.Password = this.page.locator("#input-password")
        this.Login = this.page.locator("//input[@value='Login']")
        this.Errormsg = this.page.locator("//div[@class='alert alert-danger alert-dismissible']")
    }

    //Action Methods

    async fillLoginEmailAddress(email:string)
    {
        await this.EmailAddress.fill(email)
    }

    async fillLoginPassword(password:string)
    {
        await this.Password.fill(password)
    }

    async clickLoginBtn()
    {
        await this.Login.click()
    }

    async LoginApplication(email:string, password:string)
    {
        await this.fillLoginEmailAddress(email)
        await this.fillLoginPassword(password)
        await this.clickLoginBtn()
        
    }

    async getLoginError()
    {
        return (this.Errormsg.textContent())
    }
}