import { When, Then } from "@cucumber/cucumber";

import InventoryPage from "../pages/inventory.page.ts";
const inventoryPage = new InventoryPage();

When(
  /^I change the filter from Price (low to high)$/,
  async (filter: string) => {
    await inventoryPage.changeFilterSettings(filter);
  },
);

Then(
  /^I should see the inventory page with products sorted by Price (low to high)$/,
  async (filter: string) => {
    await inventoryPage.checkAmountOrderAfterFilter();
  },
);
