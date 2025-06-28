class LoginPage{
    constructor(page){
        this.page=page
        this.username = page.getByPlaceholder("Username").first()
        this.password = page.getByPlaceholder("Password").first()
        this.loginBtn = page.locator("//div[normalize-space()='Login']")
    }

    async loginToApplication(){
       await this.username.fill("admin")
       await this.password.fill("manager")
       await this.loginBtn.click()
    }
}


module.exports = {LoginPage}