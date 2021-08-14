/**
 * Generates a puppeteer test file from template
 * Requires https://github.com/burnpiro/puppeteer-screenshot-tester
 * @param {string} componentPath component name
 * @param {string[]} stories story names as an array
 */
const puppeteerTemplate = (componentPath, stories) => {
  if (stories.length === 0) {
    return false;
  }

  const kebabCaseComponent = componentPath.toLowerCase().replace(/\//g, "-");
  const componentParts = componentPath.split("/");
  const component = componentParts[componentParts.length - 1];
  const kebabCaseStories = stories.map((story) =>
    story.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  );
  const storyNames = stories.map((story) =>
    story.replace(/([a-z])([A-Z])/g, "$1 $2")
  );

  return `const puppeteer = require("puppeteer");
const ScreenshotTester = require("puppeteer-screenshot-tester");
    
    
describe("${component}", function () {
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
            args: [\`--window-size=\${width},\${height}\`],
        });

        page = await browser.newPage();

        await page.setViewport({ width, height });

        tester = await ScreenshotTester(0.8);
    });

    afterAll(() => {
        browser.close();
    });
    

  ${kebabCaseStories
    .map(
      (story, index) => `
    test("${storyNames[index]}", async function () {
        await page.goto(baseUrl + "iframe.html?id=${kebabCaseComponent}--${story}");

        const result = await tester(page, "${story}", {
            fullPage: true, 
        });

        expect(result).toBe(true);
    });`
    )
    .join("\n")}
  });
  `;
};

module.exports = puppeteerTemplate;
