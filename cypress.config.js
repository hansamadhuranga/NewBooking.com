const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl": "https://www.booking.com",
    "chromeWebSecurity": false,
    "defaultCommandTimeout": 20000,
    "viewportWidth" : 1280,
    "viewportHeight" : 720,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
