const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

let browser;

test.describe("Use-Case 1, Firstpage-Home", function() {
    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://me-react.wissamsawah.me/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    test.it("Test Homepage", function(done) {
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Min me-app");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("http://me-react.wissamsawah.me/"));
        });

        done();
    });


    test.it("Test go to Home", function(done) {
        // Use nav link to go to home page
        browser.findElement(By.linkText("Home")).then(function(element) {
            element.click();
        });

        // Check correct heading
        browser.findElement(By.css("h1")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Min me-app");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("http://me-react.wissamsawah.me/"));
        });

        done();
    });


});

test.describe("Use-case 2, Reports->Register", function() {
    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://me-react.wissamsawah.me/reports/");
        done();
    });

    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    test.it("Test Report Page", function(done) {
        // display element background color
        browser.findElement(By.className("App")).then(function(displayElement) {
            displayElement.getCssValue("background-color").then(function(bgColor) {
                assert.equal(bgColor, "rgba(255, 255, 255, 0.17)");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("http://me-react.wissamsawah.me/reports/"));
        });

        done();
    });


    test.it("Test go from Reports to Registering Form", function(done) {
        // Use nav link to go to form page
        browser.findElement(By.linkText("Register")).then(function(element) {
            element.click();
        });

        // Check correct heading
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "REGISTER A NEW USER");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("http://me-react.wissamsawah.me/register"));
        });

        done();
    });

});


test.describe("Use-case 3, login->Register", function() {
    test.beforeEach(function(done) {
        this.timeout(20000);
        browser = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://me-react.wissamsawah.me/");
        done();
    });

test.it("Test go to Register page", function(done) {
    // Use nav link to go to home page
    browser.findElement(By.linkText("Register")).then(function(element) {
        element.click();
    });

    // Check correct heading
    browser.findElement(By.css("h2")).then(function(element) {
        element.getText().then(function(text) {
            assert.equal(text, "REGISTER A NEW USER");
        });
    });

    // Check correct URL ending
    browser.getCurrentUrl().then(function(url) {
        assert.ok(url.endsWith("http://me-react.wissamsawah.me/register"));
    });

    done();
});

test.it("Test go to Login page", function(done) {
    // Use nav link to go to home page
    browser.findElement(By.linkText("Login")).then(function(element) {
        element.click();
    });

    // Check correct heading
    browser.findElement(By.css("h2")).then(function(element) {
        element.getText().then(function(text) {
            assert.equal(text, "LOG IN");
        });
    });

    // Check correct URL ending
    browser.getCurrentUrl().then(function(url) {
        assert.ok(url.endsWith("http://me-react.wissamsawah.me/login"));
    });

    done();
});
});
