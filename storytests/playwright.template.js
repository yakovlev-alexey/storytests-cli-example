/**
 * Generates a playwright test file from template
 * @param {string} componentPath component name
 * @param {string[]} stories story names as an array
 */
const playwrightTemplate = (componentPath, stories) => {
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

  return `import { test, expect } from "@playwright/test";
  
test.describe("${component}", function () {
  const selector = ".story";

  const baseUrl = process.env.STORYBOOK_URL as string;
${kebabCaseStories
  .map(
    (story, index) => `
  test("${storyNames[index]}", async function ({ page }) {
    await page.goto(baseUrl + "iframe.html?id=${kebabCaseComponent}--${story}");

    const element = await page.$(selector);

    expect(element).not.toBe(null);

    const screenshot = await element!.screenshot();

    expect(screenshot).toMatchSnapshot("${story}.png");
  });`
  )
  .join("\n")}
});
`;
};

module.exports = playwrightTemplate;
