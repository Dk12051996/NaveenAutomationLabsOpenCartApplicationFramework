import {test,expect, Page, Locator} from '@playwright/test'

export class Registration
{
    //Variable
    private readonly page;
    private readonly firstName;
    private readonly LastName;
    private readonly Email;
    private readonly Telephone;
    private readonly pwd;
    private readonly confirmpwd;
    private readonly chkpolicy;
    private readonly continue;
    private readonly cfmsg;

    //Constructors

    constructor(page:Page)
    {
        this.page = page;
        this.firstName = this.page.locator("#input-firstname")
        this.LastName = this.page.locator("#input-lastname")
        this.Email = this.page.locator("#input-email")
        this.Telephone = this.page.locator("#input-telephone")
        this.pwd = this.page.locator("#input-password")
        this.confirmpwd = this.page.locator("#input-confirm")
        this.chkpolicy = this.page.locator("//input[@name='agree']")
        this.continue = this.page.locator("//input[@value='Continue']")
        this.cfmsg = this.page.locator('h1:has-text("Your Account Has Been Created!")')
    }

    //Action Method

    async fillFirstName(fName:string) : Promise<void>
    {
        await this.firstName.fill(fName)
    }

    async fillLastName(lName:string): Promise<void>
    {
        await this.LastName.fill(lName)
    }

    async fillEmail(email:string): Promise<void>
    {
        await this.Email.fill(email)
    }

    async fillTelephone(tel : string): Promise<void>
    {
        await this.Telephone.fill(tel)
    }

    async fillpwd(passwd : string): Promise<void>
    {
        await this.pwd.fill(passwd)
    }

    async fillconfirmPwd(cpasswd : string): Promise<void>
    {
        await this.confirmpwd.fill(cpasswd)
    }

    async checkedPolicy(): Promise<void>
    {
        await this.chkpolicy.click()
    }

    async ContinueBtn(): Promise<void>
    {
        await this.continue.click()
    }

    async confirmationMessage(): Promise<string>
    {
        return await this.cfmsg.innerText() ?? '';
    }

    async RegistrationForm(userdata :{
        fName:string, lName:string, email:string, tel:string, passwd:string, cpasswd:string 
                                    }): Promise<void>
    {
        await this.fillFirstName(userdata.fName)
        await this.fillLastName(userdata.lName)
        await this.fillEmail(userdata.email)
        await this.fillTelephone(userdata.tel)
        await this.fillpwd(userdata.passwd)
        await this.fillconfirmPwd(userdata.cpasswd)
        await this.checkedPolicy()
        await this.ContinueBtn()
        await this.confirmationMessage()
    }
    


}