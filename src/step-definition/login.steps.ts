import { Given, setDefaultTimeout } from "@cucumber/cucumber";
import LoginPage from "../pages/login.page.ts";

let loginPage = new LoginPage();

setDefaultTimeout(60 * 1000);

Given(
  /^I login to the application with username (.*) and password (.*)$/,
  async (username, password) => {
    await loginPage.completeLoginProcess(username, password);
  },
);
