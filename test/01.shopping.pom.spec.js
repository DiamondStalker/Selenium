/* -------------------------------------------------------------------------- */
/*                               Tienda spec.js                               */
/* -------------------------------------------------------------------------- */
const { Builder, By } = require("selenium-webdriver");
const Homepage = require("../pages/Homepage");
const { locators, data } = require("../resources/locators");

const { expect } = require("chai");


describe("Add products to shopping cart - POM, Before() and After() hooks", function () {
    let driver;
    let page;

    before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
        page = new Homepage(driver);
        await page.goto();
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    describe("1. Add product with different quantities ", () => {

        for (let i = 0; i < data.itemToSearch.length; i++) {

            it(`Iterance ${i + 1} item ${data.itemToSearch[i]}. Enter the page, close the promotions and search for the product`, async () => {
                await page.validatePageUrl(data.baseUrl);
                await page.closePromo();
                this.timeout(2000);
                await page.searchArticle(data.itemToSearch[i]);
                await page.takeScreenshot(`search_article_${i + 1}.png`);
                this.timeout(2000);
                await page.validateSearch(data.itemToSearch[i]);
            });

            it(`add the product to cart ${data.itemToSearch[i]} `, async () => {
                await page.selectItem();
                this.timeout(2000);
            })

            

        }
    });
});