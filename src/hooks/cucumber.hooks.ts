import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import { invokeBrowser } from "../utils/browser.ts";
import { Browser, BrowserContext } from "@playwright/test";
import { PageFixture } from "./pageFixture.ts";
import dotenv from "dotenv";

dotenv.config();

let browser: Browser;

BeforeAll(async function () {
  browser = await invokeBrowser();
});

Before(async function () {
  const page = await browser.newPage();
  PageFixture.page = page;
});

After(async function ({ pickle, result }) {
  // screenshot on failure
  // console.log("pickle: \n", pickle);
  // console.log("result: \n", result);
  if (result?.status == Status.FAILED) {
    const img = await PageFixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });
    await this.attach(img, "image/png");
  }
  await PageFixture.page.close();
});

AfterAll(async function () {
  await browser.close();
});
