const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Clicking the Draw button displays the div with id = 'choices'", async () => {
    await driver.get("http://localhost:8000")
    const drawButton = await driver.findElement(By.id("draw-button"))
    await drawButton.click()
    const choicesDiv = await driver.findElement(By.id("choices"))
    expect(await choicesDiv.isDisplayed()).toBe(true)
  }),

  test("clicking the Draw", async () => {
    await driver.findElement(By.id("add-to-duo-1")).click()
    const playerDuoDiv = await driver.findElement(By.id("player-duo"))
    expect(playerDuoDiv).toBeDisplayed()
  })
});