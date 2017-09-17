/**
 * https://github.com/adamgruber/mochawesome
 * 测试报告
 */


var assert = require('assert');

require('chromedriver')

describe('测试用户注册登录', function () {
    this.timeout(60*1000)
    let webdriver = require('selenium-webdriver')
    let driver = new webdriver.Builder().forBrowser('chrome').build();

    describe('打开网页', function () {
        it('导航到百度页面', async function () {
            await driver.get("https://www.baidu.com/")
        });
        it("点击新闻按钮", async function () {
            await driver.findElement({css:'#u1 > a:nth-child(1)'}).click()
        });
        it("导航到新闻页面", async function () {
            let singupurl =  await driver.getCurrentUrl();
            return assert.equal("http://news.baidu.com/",singupurl)
        });

    });

});