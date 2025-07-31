import { Locator, Page } from "@playwright/test"
export class LoginPage{
    username:Locator;
    password:Locator;
    loginBtn: Locator;
    page:Page;
    constructor(page:Page){
        this.page = page
        this.username = page.getByPlaceholder("Username").first()
        this.password = page.getByPlaceholder("Password").first()
        this.loginBtn = page.locator("//div[normalize-space()='Login']")
    }

    async getUserName(){
        await this.username.fill("admin")
    }

    async getPassword(){
        await this.password.fill("manager")
    }

    async getLoginButton(){
        await this.loginBtn.click()
    }

}