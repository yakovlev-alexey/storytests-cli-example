const path = require("path");

module.exports = {
  sets: {
    desktop: {
      files: "**/*.hermione.js",
    },
  },

  gridUrl: process.env.GRID_URL,
  baseUrl: process.env.HERMIONE_BASE_URL,
  screenshotDelay: 2000,

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        version: "67.0",
        chromeOptions: {
          prefs: {
            credentials_enable_service: false,
            profile: {
              default_content_setting_values: {
                password_manager_enabled: false,
              },
            },
          },
        },
      },

      compositeImage: true,
      windowSize: "1440x1024",
      retry: 3,
      testsPerSession: 4,
      meta: { platform: "desktop" },
    },
  },

  prepareBrowser: (browser) => {
    browser.extendOptions({ deprecationWarnings: false });
  },

  screenshotsDir: (test) => {
    return path.join(
      path.dirname(test.file),
      ".screens",
      test.title,
      test.browserId
    );
  },

  waitTimeout: 5000,

  sessionsPerBrowser: 10,

  plugins: {
    "html-reporter/hermione": {
      enabled: true,
      path: "hermione-reports",
      defaultView: "all",
      errorPatterns: [
        "Parameter .* must be a string",
        {
          name: "Cannot read property of undefined",
          pattern: "Cannot read property .* of undefined",
        },
      ],
    },
  },
};
