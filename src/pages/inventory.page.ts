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
}

export default InventoryPage;
