const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.interviewme.pl',
    chromeWebSecurity: false,
    viewportWidth: 1500,
    viewportHeight: 830,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
