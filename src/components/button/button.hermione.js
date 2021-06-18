describe("Button", function () {
  const selector = ".story";
        
  it("Primary", function () {
    return this.browser
      .url("iframe.html?id=components-button--primary")
      .assertView("primary", selector);
  });

  it("Secondary", function () {
    return this.browser
      .url("iframe.html?id=components-button--secondary")
      .assertView("secondary", selector);
  });

  it("Large", function () {
    return this.browser
      .url("iframe.html?id=components-button--large")
      .assertView("large", selector);
  });

  it("Medium", function () {
    return this.browser
      .url("iframe.html?id=components-button--medium")
      .assertView("medium", selector);
  });

  it("Small", function () {
    return this.browser
      .url("iframe.html?id=components-button--small")
      .assertView("small", selector);
  });

  it("Hover", function () {
    return this.browser
      .url("iframe.html?id=components-button--hover")
      .assertView("hover", selector);
  });

  it("Focus", function () {
    return this.browser
      .url("iframe.html?id=components-button--focus")
      .assertView("focus", selector);
  });

  it("Active", function () {
    return this.browser
      .url("iframe.html?id=components-button--active")
      .assertView("active", selector);
  });

  it("Hover Active", function () {
    return this.browser
      .url("iframe.html?id=components-button--hover-active")
      .assertView("hover-active", selector);
  });

  it("Focus Active", function () {
    return this.browser
      .url("iframe.html?id=components-button--focus-active")
      .assertView("focus-active", selector);
  });

  it("Hover Focus Active", function () {
    return this.browser
      .url("iframe.html?id=components-button--hover-focus-active")
      .assertView("hover-focus-active", selector);
  });
});
