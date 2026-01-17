import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import LoginPage from "../pages/login.page.ts";
import InventoryPage from "../pages/inventory.page.ts";

let loginPage = new LoginPage();
let inventoryPage = new InventoryPage();

setDefaultTimeout(60 * 1000);

Given(
  /^I login to the application with username (.*) and password (.*)$/,
  async (username, password) => {
    await loginPage.completeLoginProcess(username, password);
  },
);

Then(`I should be redirected to the investory page`, async () => {
  await inventoryPage.verifyInventoryPageTitle();
});

Then(`I should see products on the screen`, async () => {
  await inventoryPage.verifyProductsAreVisible();
});

Given(`I launch the application`, async () => {
  await loginPage.gotoLoginPage();
});

When(`I enter incorrect credentials`, async () => {
  await loginPage.enterUsername("incorrect username");
  await loginPage.enterPassword("incorrect password");
  await loginPage.clickLoginButton();
});

Then(`I should see error message`, async () => {
  await loginPage.verifyErrorMessage();
});
