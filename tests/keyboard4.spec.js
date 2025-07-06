const { test, except } = require('@playwright/test')
// By using keyborad we an handle single or multiple keys
test('Handling Keyboard Actions1', async ({ page }) => {
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(4000)

    await page.keyboard.type("HELLO WORLD!")
    await page.waitForTimeout(1000)
    await page.keyboard.press('ArrowLeft');

    await page.keyboard.down('Shift');
    for (let i = 0; i < ' World'.length; i++){
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');

    await page.keyboard.press('Backspace');
    await page.waitForTimeout(4000)
})