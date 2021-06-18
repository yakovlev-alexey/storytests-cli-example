/**
 * Generates a hermione test file from template
 * @param {string} componentPath component name
 * @param {string[]} stories story names as an array
 */
const hermioneTemplate = (componentPath, stories) => {
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

  return `describe("${component}", function () {
  const selector = ".story";
        ${kebabCaseStories
          .map(
            (story, index) => `
  it("${storyNames[index]}", function () {
    return this.browser
      .url("iframe.html?id=${kebabCaseComponent}--${story}")
      .assertView("${story}", selector);
  });`
          )
          .join("\n")}
});
`;
};

module.exports = hermioneTemplate;
