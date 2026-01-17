import { expect } from "@playwright/test";
import BasePage from "./Base.page.ts";

class InventoryPage extends BasePage {
  readonly inventoryPageTitle = "Swag Labs";

  async verifyInventoryPageTitle() {
    await expect(this.page.getByText(this.inventoryPageTitle)).toBeVisible();
  }

  async verifyProductsAreVisible() {
    const productCount = await this.getElements(
      "div[class='inventory_item_name ']",
    );

    expect(productCount).toHaveLength(6);
  }

  async changeFilterSettings(filter: string) {
    const selectElement = this.page.locator(
      '[data-test="product-sort-container"]',
    );

    switch (filter) {
      case "low to high":
        await selectElement.selectOption("lohi");
        break;
      case "high to low":
        await selectElement.selectOption("hilo");
        break;
      case "Name (Z to A)":
        await selectElement.selectOption("za");
        break;
      case "Name (A to Z)":
        await selectElement.selectOption("az");
        break;
      default:
        break;
    }
  }

  async checkAmountOrderAfterFilter() {
    const productPrices = await this.page
      .locator("div[class='inventory_item_price']")
      .all();

    const firstPrice = await this.page
      .locator("div[class='inventory_item_price']")
      .first()
      .innerText();

    const firstPriceValue = firstPrice.replace("$", "");

    productPrices.filter(async (price) => {
      let priceValue = await price.innerText();
      priceValue = priceValue.replace("$", "");
      if (firstPriceValue <= priceValue) {
        expect(Number(firstPriceValue)).toBeLessThanOrEqual(Number(priceValue));
      }
    });
  }
}

export default InventoryPage;
