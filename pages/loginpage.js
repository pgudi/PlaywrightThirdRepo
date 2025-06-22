class LoginPage
{
    constructor(page){
        this.page=page
        this.username="//input[@id='username']"
        this.password="//input[@placeholder='Password']"
        this.loginbtn="//div[normalize-space()='Login']"
    }

    async loginApplication(){
        await this.page.fill(this.username, "admin")
        await this.page.fill(this.password, "manager")
        await this.page.click(this.loginbtn)
    }
}

module.exports = LoginPage