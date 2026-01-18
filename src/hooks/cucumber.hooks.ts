import {
  BeforeAll,
  AfterAll,
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
// import "allure-cucumberjs";

dotenv.config();

let browser: Browser;

BeforeAll(async function () {
  browser = await invokeBrowser();
  await allure.owner("Dhruv Dhiman");
  await allure.epic("E-Commerce");
});

Before(async function ({ pickle }) {
  PageFixture.page = await browser.newPage();
  await allure.feature(pickle.name);
});

BeforeStep(async function ({ pickle }) {
  await allure.step(pickle.name, async () => {
  });
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
    // this.attach(img, "image/png");

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
  await PageFixture.page.close();
});

AfterAll(async function () {
  await browser.close();


});
