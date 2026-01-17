import { Page } from "playwright";
import { PageFixture } from "../hooks/pageFixture.ts";

class BasePage {
  get page(): Page {
    return PageFixture.page;
  }

  /**
   *
   * @param locator - xpath or css selector
   * @returns element
   */
  getElement(locator: string) {
    const element = this.page.locator(locator);
    element.waitFor({
      state: "visible",
    });
    return element;
  }

  /**
   *
   * @param locator - xpath or css selector
   * @returns elements
   */
  async getElements(locator: string) {
    await this.page.locator(locator).first().waitFor({
      state: "visible",
    });
    return await this.page.locator(locator).all();
  }

  /**
   *
   * @param text - text to be searched
   * @returns string
   */
  async getText(text: string) {
    const element = this.page.getByText(text);
    await element.waitFor({
      state: "visible",
    });
    return element.innerText();
  }

  async findBy() {}
}

export default BasePage;
