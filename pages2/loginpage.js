class LoginPage{
    constructor(page){
        this.page = page
        this.username = "//input[@id='username']"
        this.password = "//input[@placeholder='Password']"
        this.loginbtn = "//div[normalize-space()='Login']"
    }

    async getUserName(){
        await this.page.fill(this.username, "admin")
    }

    async getPassword(){
        await this.page.fill(this.password, "manager")
    }

    async getLoginButton(){
        await this.page.click(this.loginbtn)
    }

}

module.exports = {LoginPage}