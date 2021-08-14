const path = require("path");
const hermioneTemplate = require("./storytests/hermione.template");
const playwrightTemplate = require("./storytests/playwright.template");
const puppeteerTemplate = require("./storytests/puppeteer.template");

module.exports = {
  /**
   * Should match `Components/Button`
   * ```
   * export default {
   *   title: "Components/Button",
   *   component: Button,
   * } as Meta;
   * ```
   */
  componentNamePattern: /(?<=title: ")[a-z/]+/gi,

  /**
   * Should match `Secondary`
   * ```
   * export const Secondary = Template.bind({});
   * ```
   *
   * Should not match `Playground`
   * ```
   * // @storytests-ignore
   * export const Playground = Template.bind({});
   * ```
   */
  storyNamePattern: /(?<!\/\/ @storytests-ignore[ \r\n]export const )\b[a-z]+(?= = Template.bind\()/gi,

  /**
   * Generate a single test file for a single component, not for every story
   */
  testGenerationStrategy: "component",

  /**
   * Generate test files in the same directory as stories file
   */
  relativeTestDirectoryPath: "./",

  /**
   * Generate `hermione` and `playwright` (though we can use any names here, they get passed to our hooks)
   */
  testFilePostfixes: ["hermione", "playwright", "puppeteer"],

  /**
   * Glob pattern to match story files
   */
  storyFilesPath: path.resolve(__dirname, "./src/**/*.stories.tsx"),

  /**
   * A hook function to generate test file contents
   * @param {string} componentPath component name (match from `componentNamePattern`)
   * @param {string[]} stories story names as an array (matches from `storyNamePattern`, could be empty)
   * @param {string} postfix test file postfix
   * @returns {string|false} could return false then this file will not be generated
   */
  testTemplate: (componentPath, stories, postfix) => {
    switch (postfix) {
      case "hermione":
        return hermioneTemplate(componentPath, stories);
      case "playwright":
        return playwrightTemplate(componentPath, stories);
      case "puppeteer":
        return puppeteerTemplate(componentPath, stories);
      default:
        return false;
    }
  },

  /**
   * A hook function to generate file name
   */
  generateFileName: (componentPath, postfix) => {
    const componentParts = componentPath.split("/");

    const component = componentParts[componentParts.length - 1].toLowerCase();

    const isPlaywright = postfix === "playwright";

    const type = isPlaywright ? "spec" : postfix;

    const extention = isPlaywright ? "ts" : "js";

    // Even though we specified `playwright` as a postfix in the config we are free to use any names we want
    return `${component}.${type}.${extention}`;
  },
};
