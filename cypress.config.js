const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

function loadEnvConfigFile() {
  const fileName = `cypress.env.json`;
  const filePath = path.resolve(__dirname, fileName);

  if (fs.existsSync(filePath)) {
    return require(filePath);
  } else {
    console.error(`Environment file not found: ${filePath}`);
    return {};
  }
}

// Load the config
const envConfig = loadEnvConfigFile();

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 8000,
  e2e: {
    experimentalRunAllSpecs: true,
    screenshotOnRunFailure: false,
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: envConfig.BASE_URL,
    env: envConfig,
  }
});