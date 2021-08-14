const puppeteer = require("puppeteer");
const ScreenshotTester = require("puppeteer-screenshot-tester");
    
    
describe("Button", function () {
    let page;
    let browser;
    const width = 1920;
    const height = 1080;

    const baseUrl = process.env.STORYBOOK_URL;

    let tester;

    beforeAll(async () => {
        jest.setTimeout(15000);
    
        browser = await puppeteer.launch({
            headless: true,
            args: [`--window-size=${width},${height}`],
        });

        page = await browser.newPage();

        await page.setViewport({ width, height });

        tester = await ScreenshotTester(0.8);
    });

    afterAll(() => {
        browser.close();
    });
    

  
    test("Primary", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--primary");

        const result = await tester(page, "primary", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Secondary", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--secondary");

        const result = await tester(page, "secondary", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Large", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--large");

        const result = await tester(page, "large", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Medium", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--medium");

        const result = await tester(page, "medium", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Small", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--small");

        const result = await tester(page, "small", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Hover", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--hover");

        const result = await tester(page, "hover", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Focus", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--focus");

        const result = await tester(page, "focus", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Active", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--active");

        const result = await tester(page, "active", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Hover Active", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--hover-active");

        const result = await tester(page, "hover-active", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Focus Active", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--focus-active");

        const result = await tester(page, "focus-active", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });

    test("Hover Focus Active", async function () {
        await page.goto(baseUrl + "iframe.html?id=components-button--hover-focus-active");

        const result = await tester(page, "hover-focus-active", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });
  });
  