const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require('@cypress/browserify-preprocessor');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

let jarProcess;

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

// Function to check if a process is running
function isProcessRunning(pid) {
  try {
    process.kill(pid, 0); // Signal 0 checks if the process exists without killing it
    return true;
  } catch (err) {
    return false; // Process is not running
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
          console.log('Attempting to stop the JAR process...');
          const isWindows = process.platform === 'win32';

          try {
            if (isWindows) {
              console.log('Started stopping java process in windows platform.');
              // Use WMIC to terminate all Java processes on Windows
              const taskkill = spawn('taskkill', ['/F', '/T', '/IM', 'java.exe'], { stdio: 'inherit', shell: true });
              taskkill.on('close', (code) => {
                if (code === 0) {
                  console.log('All Java processes successfully terminated using WMIC.');
                } else {
                  console.error(`WMIC command failed with exit code ${code}.`);
                }
              });
            } else {
              console.log('Started stopping java process in linux platform.');
              // Use pkill on Unix/Linux
              const pkill = spawn('pkill', ['-f', 'demo-0.0.1-SNAPSHOT.jar']);
              pkill.on('close', (code) => {
                if (code === 0) {
                  console.log('JAR process successfully terminated using pkill.');
                } else {
                  console.error(`pkill failed with exit code ${code}.`);
                }
              });
            }
          } catch (error) {
            console.error(`Error stopping the JAR process: ${error.message}`);
          } finally {
            jarProcess = null;
          }
        } else {
          console.warn('JAR process is not running or already stopped.');
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