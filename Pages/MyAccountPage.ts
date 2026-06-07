import {test,expect,Page,Locator} from "@playwright/test"

export class MyAccountPage
{
    //Variable

    private readonly page:Page;
    private readonly msgHeading : Locator;
    private readonly Logout : Locator;
    private readonly wLogout :Locator

    //Locator
    constructor(page:Page)
    {
        this.page = page;
        this.msgHeading = this.page.locator("//h2[text()='My Account']");
        this.Logout = this.page.locator("//a[@class='list-group-item'][text()='Logout']");
        this.wLogout = this.page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Logout']")
    }

    //Action Method
    async HeadingMyAccount()
    {
        try{
        const isVisible = await this.msgHeading.isVisible()
        return isVisible;
        } catch(error)
        {
            console.log(`The Error occurs when the My Account Heading is not Visible : ${error}`)
            return false;
        }
    }

        async LogoutfromApplication()
        {
            await this.Logout.click()
        }

         async WithoutLoginLogoutfromApplication()
        {
            await this.wLogout.click()
        }
        
    

}