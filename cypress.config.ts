export default {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    viewportHeight: 880,
    viewportWidth: 1280,
    experimentalRunAllSpecs: true,
    pageLoadTimeout: 100000,
    defaultCommandTimeout: 10000
  },
};
