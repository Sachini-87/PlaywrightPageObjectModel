const {test,expect}= require('@playwright/test')

test('AssertionTest',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    const logo=await page.locator("//div[@class='master-wrapper-page']")
    await expect(logo).toBeVisible()
})