const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPluging = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPluging;
const createEsbuildplugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildplugin;

module.exports = defineConfig({
  e2e: {
    experimentalModifyObstructiveThirdPartyCode: true,
    specPattern: 'cypress/integraton/**/*.feature',
    defaultCommandTimeout: 5000,
    viewportWidth: 1000,
    viewportHeight: 600,
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildplugin(config)],
      });

      on("file:prepocessor", bundler);
      await addCucumberPreprocessorPluging(on, config);
      
      return config;
  }
}});

