const { By } = require("selenium-webdriver");
const { expect } = require("chai");
const { locators, data } = require("../resources/locators");
const fs = require('fs');
const path = require('path');

class Homepage {

    constructor(driver) {
        this.driver = driver;
    }

    async goto() {
        await this.driver.get(data.baseUrl);
    }

    async validatePageUrl(expectedUrl) {
        const actualUrl = await this.driver.getCurrentUrl();
        const res = expect(actualUrl).to.contains(expectedUrl);
        return res;
    }

    async validateSearch(text) {
        const actualUrl = await this.driver.getCurrentUrl();
        const res = expect(actualUrl).to.contains(text);
        return res;
    }

    async closePromo() {
        let promoCloseButton;

        try {
            promoCloseButton = await this.driver.findElement(By.css(locators.promo));
        } catch (error) {
            promoCloseButton = null
        }


        if (promoCloseButton)
            await promoCloseButton.click();
    };

    async searchArticle(article) {
        await this.driver.findElement(By.css(locators.searchArticle)).sendKeys(article);
        await this.driver.findElement(By.css(locators.imputSearch)).click();

    }

    async takeScreenshot(fileName) {
        const screenshot = await this.driver.takeScreenshot();
        const projectRoot = process.cwd();
        const filePath = path.join(projectRoot, 'screenshots', fileName);
        if (!fs.existsSync(path.dirname(filePath))) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
        }

        fs.writeFileSync(filePath, screenshot, 'base64');
        console.log(`Screenshot saved: ${filePath}`);
    }

    async selectItem() {
        const items = await this.driver.findElements(By.css(locators.items));
        if (items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            await items[randomIndex].click();

            await this.driver.sleep(500);

            const windows = await this.driver.getAllWindowHandles();
            await this.driver.switchTo().window(windows[windows.length - 1]);

            let buttonMore;

            try {
                buttonMore = await this.driver.findElement(By.css(locators.moreItems));
            } catch (error) {
                console.log("El botón de 'más' no existe.");
                buttonMore = null;
            }

            if (buttonMore) {
                let moreItems = Math.floor(Math.random() * 5);

                for (let i = 0; i < moreItems; i++) {
                    await this.driver.findElement(By.css(locators.moreItems)).click();
                    await this.driver.sleep(500);
                }
            }

            const addToCartButton = await this.driver.findElement(By.css(locators.addItem));
            await addToCartButton.click();

            await this.driver.sleep(500);

            await this.driver.close();
            await this.driver.switchTo().window(windows[0]);
        }
    }

}
module.exports = Homepage;