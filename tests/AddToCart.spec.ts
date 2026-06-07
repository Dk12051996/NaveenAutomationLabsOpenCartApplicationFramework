/**
 * Test Case: Add Product to Cart
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Enter an existing product name in the search box
 * 3. Click the search button
 * 4. Verify the product appears in the search results
 * 5. Select the product
 * 6. Set quantity
 * 7. Add the product to the cart
 * 8. Verify the success message
 */
import {test,expect,Page,Locator} from "@playwright/test"

import { TestConfig } from "../test.config"
import { Homepage } from "../Pages/Homepage";
import { searchProductNameInSearchField } from "../Pages/SearchProductPage"
import { ProductPage } from "../Pages/ProductPage.spec";


let testconfig : TestConfig;
let searchproduct : searchProductNameInSearchField;
let productPage : ProductPage;


test.beforeEach("Launch URL", async ({ page }) => {
    testconfig = new TestConfig()
    await page.goto(testconfig.appUrl)

})

test.afterEach("close Application" , async ({page}) => {

    await page.waitForTimeout(3000)
    await page.close();
})

test("Add Product to Cart" , async ({page}) => {
   
    const homepage = new Homepage(page)
    homepage.searchProductNameInSearchField(testconfig.productName)
    homepage.ClickontheSearchButton()

    searchproduct = new searchProductNameInSearchField(page)
    searchproduct.selectProduct(testconfig.productName)

    productPage = new ProductPage(page)
    productPage.QuantityofProduct(testconfig.productQuantity)
    productPage.clickonAddToCart()
    productPage.visibilityOfSuccessMessage()





    
})