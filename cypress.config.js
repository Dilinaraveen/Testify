const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require('@cypress/browserify-preprocessor');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

let jarProcess; // Global variable to manage the JAR process

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

// Load the environment configuration
const envConfig = loadEnvConfigFile();

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 8000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    experimentalRunAllSpecs: true,
    screenshotOnRunFailure: false,
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      const options = browserify.defaultOptions;
      options.typescript = require.resolve('typescript');
      on('file:preprocessor', cucumber(options));

      // Start the JAR process before the entire test suite
      on('before:run', async () => {
        console.log('Starting the JAR process...');
        jarProcess = spawn('java', ['-jar', './cypress/support/stepDefinitions/apiSteps/demo-0.0.1-SNAPSHOT.jar'], {
          detached: true,
          stdio: 'ignore',
        });

        // Allow some time for the JAR to initialize
        await new Promise((resolve) => setTimeout(resolve, 5000));
        console.log('JAR process started successfully.');
      });

      // Stop the JAR process after the entire test suite
      on('after:run', () => {
        if (jarProcess) {
          console.log('Stopping the JAR process...');
          try {
            process.kill(-jarProcess.pid); // Stop the process using the process group ID
            jarProcess = null; // Clear the reference
            console.log('JAR process stopped successfully.');
          } catch (error) {
            console.error('Error stopping the JAR process:', error.message);
          }
        } else {
          console.warn('No JAR process found to stop.');
        }
      });

      return config;
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: envConfig.BASE_URL || 'http://localhost:3000',
    env: envConfig,
  },
});