import { Page } from "playwright";
import { PageFixture } from "../hooks/pageFixture.ts";

class BasePage {
  get page(): Page {
    return PageFixture.page;
  }
}

export default BasePage;
