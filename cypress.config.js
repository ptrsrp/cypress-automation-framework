const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3w67ek',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/"
  },
  //hide XHR
  env: {
    hideXhr: true
  }
  //video: true,
});
