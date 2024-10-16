import{test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/Login';
test('test',async({page})=>{

    const Login1= new LoginPage(page)
    await Login1.gotoLoginpage()
    await Login1.login('tomsmith','SuperSecretPassword!')
    
//await page.goto('https://the-internet.herokuapp.com/login')
//await page.getByLabel('Username').click()
//await page.getByLabel('Username').fill('tomsmith')
//await page.getByLabel('Password').click()
//await page.getByLabel('Password').fill('SuperSecretPassword!')
//await page.locator("//div[@id='content']").click()

})