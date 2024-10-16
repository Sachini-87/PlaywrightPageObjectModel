import {test,expect}from '@playwright/test'

test('Locators', async({page})=>{

    await page.goto("https://demoblaze.com/");

    //click on login button -property

    await page.locator('id=login2').click()

    //Provide username -css
    await page.fill('#loginusername','pavanol')

    //provide password

    await page.fill("input[id='loginpassword']",'test@123')

    //Click onlogin button
    await page.locator('class=btn btn-primary')

    //Verify logout link presence
    const Logoutbtnpresence = await page.locator('id=logout2')
   // await expect(Logoutbtnpresence).toBeVisible();
  // await expect(Logoutbtnpresence).toBeVisible();
    await page.close();

})