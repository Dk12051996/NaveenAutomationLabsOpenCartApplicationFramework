import {test,expect,Page,Locator} from "@playwright/test"

export class searchProductNameInSearchField {

    //Variable
    private readonly page : Page;
    private readonly SearchPageHeader : Locator;
    private readonly SearchProducts : Locator;

    //Constructor
    constructor(page:Page)
    {
        this.page = page;
        this.SearchPageHeader = this.page.locator("#content h1")
        this.SearchProducts = this.page.locator("h4 a")
    }

    //Actions Methods

    async isSearchResultPageExists()
    {
        try{
            const headerText = await this.SearchPageHeader.textContent()
            return headerText?.includes('Search -') ?? false;
        }
            catch(error) {
                console.log(`The Error occurs while search product {$error}`)
                return false;
            }

        
    }

    async isProductNameExist(productName:string)
    {
        try{
        const CountofProducts = await this.SearchProducts.count()
        console.log("The Count of Searched products " , CountofProducts)
        for(let i=0; i < CountofProducts; i++)
        {
             const products = await this.SearchProducts.nth(i)
             const title = await products.textContent()

             if(title===productName)
             {
                return true;
             }
        console.log(`Product Not found ${productName}`)
        }
    }catch(error)
    {
        console.log(`The search Product Not found ${error}`)
        
    }
    return null;
    }

    async selectProduct(productName : string)
    {
        try{
        const Prodcount = await this.SearchProducts.count()
        for(let i=0; i<Prodcount; i++)
        {
            const ProdList = await this.SearchProducts.nth(i)
            const ProdList1 = await ProdList.textContent()

            if(ProdList1 === productName)
            {
                await ProdList.click()
            }
            console.log(`Product Not found ${productName}`)
        }}catch(error)
        {
            console.log(`Product Not found ${error}`)
        }
        return null;
}
    
}