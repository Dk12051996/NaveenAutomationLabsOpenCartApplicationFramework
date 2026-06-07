import {test, expect , Page, Locator} from "@playwright/test"


export class Homepage
{
    //Variable
    private readonly page : Page;
    private readonly myAccount : Locator;
    private readonly register : Locator;
    private readonly Login : Locator;
    private readonly searchField : Locator;
    private readonly searchIcon : Locator;

    //Constructor
    constructor(page:Page)
    {
        this.page = page;
        this.myAccount = this.page.locator("//span[text()='My Account']")
        this.register = this.page.locator("a:has-text('Register')")
        this.Login = this.page.locator('a:has-text("Login")')
        this.searchField = this.page.locator("//input[@name='search']")
        this.searchIcon = this.page.locator("//button[@class='btn btn-default btn-lg']")
    }

    //Action Methods 
    async isHomePageExists()
    {
        let title:string = await this.page.title()
        if(title)
        {
            return true;
        }
        return false;
    }

    async clickonMyAccount()
    {
        try{
      await this.myAccount.click()
        }
        catch(error) {
            console.log(`Exception Occurs when clicking on My Account : , ${error}`)  
            throw error;
        }
    }

    async clickOnMyRegister()
    {
        try{
        await this.register.click()
        return true;
        }
        catch(error)
        {
            console.log(`Error Occurs while click on the Register : ${error}`)
            throw error;
        }
    }

    async clickOnLogin()
    { 
        try{
        await this.Login.click()
           }
       catch(error)
       {
        console.log(`Exception occurs while click on Login : ${error}`)
        throw error;
       }
    }

    async searchProductNameInSearchField(pName:string)
    {
        try{
            await this.searchField.fill(pName)
        }
        catch(error)
        {
            console.log(`Error occurs while fill the Product Name in the Serach Field : ${error}`)
            throw error;
        }
    }

    async ClickontheSearchButton()
    {
        try{
            await this.searchIcon.click()
        }
        catch(error)
        {
            console.log(`The Error Occurs while click on the Serach Icon : ${error}`)
            throw error;
        }
    }




    
    
}