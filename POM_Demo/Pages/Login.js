
exports.LoginPage= class LoginPage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.locator("//div[@id='content']")
}

async gotoLoginpage(){
    await this.page.goto('https://the-internet.herokuapp.com/login')
}
async login(username,password){
    await this.username_textbox.fill()
    await this.password_textbox.fill()
    await this.login_button.click()
}



}