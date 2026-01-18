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

Then(`I click on menu button`, async () => {
    await inventoryPage.clickMenuButton();

})

Then(`I click on logout button`, async () => {
    await inventoryPage.clickLogoutButton();
})

When('I click on the first product', async () => {
  await inventoryPage.clickFirstProduct();
})

Then('I should be redirected to the product page', async () => {
  await inventoryPage.verifyProductPage();
})

