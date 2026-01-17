// import { Page } from "@playwright/test";
// import { PageFixture } from "../hooks/pageFixture.ts";
import BasePage from "./Base.page.ts";

class LoginPage extends BasePage {
  async completeLoginProcess(username: string, password: string) {
    await this.gotoLoginPage();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.verifyDashboard();
  }

  async gotoLoginPage() {
    await this.page.goto(process.env.APPLICATION_PAGE!, {
      waitUntil: "domcontentloaded",
    });
  }
  async enterUsername(username: string) {
    await this.page.getByPlaceholder("Username").fill(username);
  }
  async enterPassword(password: string) {
    await this.page.getByPlaceholder("Password").fill(password);
  }
  async clickLoginButton() {
    await this.page.locator("#login-button").click();
  }
  async verifyDashboard() {
    await this.page.waitForURL("https://www.saucedemo.com/inventory.html");
  }
}

export default LoginPage;
