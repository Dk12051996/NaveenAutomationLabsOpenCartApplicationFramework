/**
 * Test Case: Product Search
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Enter the product name in the search field
 * 3) Click the search button
 * 4) Verify if the product is displayed in the search results
 */

import {test,expect,Page, Locator } from "@playwright/test"

import { TestConfig } from "../test.config"
import { Homepage } from "../Pages/Homepage"
import { searchProductNameInSearchField } from "../Pages/SearchProductPage"

let testconfig : TestConfig;
let homepage : Homepage;
let searchProduct : searchProductNameInSearchField;

test.beforeEach("Launch URL" , async ({page})=> {

    const testconfig = new TestConfig()
    await page.goto(testconfig.appUrl)

})

test.afterEach("Close Browser" , async ({page}) => {
    await page.waitForTimeout(5000)
    await page.close()
})

test("Search a Product" , async ({page}) => {

    const homepage = new Homepage(page)
    const testconfig = new TestConfig()

    homepage.searchProductNameInSearchField(testconfig.productName)
    homepage.ClickontheSearchButton()

    const searchProduct = new searchProductNameInSearchField(page)
    searchProduct.isSearchResultPageExists()
    searchProduct.isProductNameExist(testconfig.productName)
    


})