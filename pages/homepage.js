class HomePage
{
    constructor(page){
        this.page=page
        this.logoutlnk="//a[@id='logoutLink']"
        this.usermenu="//a[@class='content users']//div[@class='img']"
        this.flyoutwindow="//div[@id='gettingStartedShortcutsPanelId']"
    }


    async navigateToUserMenu(){
        await this.page.click(this.usermenu)
    }

    async minimizeFlyOutWindow(){
        await this.page.click(this.flyoutwindow)
    }

    async logout(){
        await this.page.click(this.logoutlnk)
    }
}

module.exports = {HomePage}