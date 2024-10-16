const {test,expect}=require('playwright/test')
test('inputbox',async({page})=>{

    await page.goto('https://artoftesting.com/samplesiteforselenium');

    //Inputbox -firtname
    await expect(await page.locator("//input[@id='fname']")).toBeVisible();
    await expect(await page.locator("//input[@id='fname']")).toBeEmpty();
    await expect(await page.locator("//input[@id='fname']")).toBeEnabled();
    await expect(await page.locator("//input[@id='fname']")).toBeEditable();

    await page.locator("//input[@id='fname']").fill("John")
    //page.fill("//input[@id='fname']",'John');

    await page.waitForTimeout(5000);
})