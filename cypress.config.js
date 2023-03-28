//@ts-check
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:"w7z1y4",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //baseUrl:"http://www.webdriveruniversity.com"
  },
  
  
});
