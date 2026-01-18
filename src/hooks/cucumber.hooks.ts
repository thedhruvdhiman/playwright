import {
  BeforeAll,
  AfterAll,
  AfterStep,
  Before,
  After,
  Status,
  BeforeStep,
} from "@cucumber/cucumber";
import { invokeBrowser } from "../utils/browser.ts";
import { Browser } from "@playwright/test";
import { PageFixture } from "./pageFixture.ts";
import dotenv from "dotenv";
import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

dotenv.config();

let browser: Browser;

BeforeAll(async function () {
  browser = await invokeBrowser();
  allure.step("Launch the browser", async () => {});
});

Before(async function ({ pickle }) {
  PageFixture.page = await browser.newPage();
});

BeforeStep(async function ({ pickle }) {});

AfterStep(async function ({ pickle, result }) {
  if (result?.status == Status.FAILED) {
    const img = await PageFixture.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });
    this.attach(img, "image/png");

    await allure.attachment(
      `${pickle.name}`,
      `./test-results/screenshots/${pickle.name}.png`,
      ContentType.PNG,
    );

    await allure.attachmentPath(
      `${pickle.name}`,
      `./test-results/screenshots/${pickle.name}.png`,
      {
        contentType: ContentType.PNG,
        fileExtension: "png",
      },
    );
  }
});

After(async function ({ pickle, result }) {
  await PageFixture.page.close();
});

AfterAll(async function () {
  await browser.close();
  allure.step("Close the browser", async () => {});
});
