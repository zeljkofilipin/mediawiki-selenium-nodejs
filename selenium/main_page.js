var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('https://en.wikipedia.beta.wmflabs.org/wiki/Main_Page');
driver.findElement(By.linkText('Log in')).isDisplayed().then(displayed => {
  console.log(displayed);
});
driver.quit();
