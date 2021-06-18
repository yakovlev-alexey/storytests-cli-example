import { test, expect } from "@playwright/test";
  
test.describe("Button", function () {
  const selector = ".story";

  const baseUrl = process.env.STORYBOOK_URL as string;

  test("Primary", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--primary");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("primary.png");
  });

  test("Secondary", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--secondary");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("secondary.png");
  });

  test("Large", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--large");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("large.png");
  });

  test("Medium", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--medium");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("medium.png");
  });

  test("Small", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--small");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("small.png");
  });

  test("Hover", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--hover");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("hover.png");
  });

  test("Focus", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--focus");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("focus.png");
  });

  test("Active", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--active");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("active.png");
  });

  test("Hover Active", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--hover-active");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("hover-active.png");
  });

  test("Focus Active", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--focus-active");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("focus-active.png");
  });

  test("Hover Focus Active", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=components-button--hover-focus-active");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("hover-focus-active.png");
  });
});
