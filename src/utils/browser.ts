import { chromium, firefox, webkit } from "playwright";
import { LaunchOptions } from "@playwright/test";

const launchOptions: LaunchOptions = {
  args: ["--start-maximized"],
  headless: false,
  timeout: 15000,
};

export const invokeBrowser = async () => {
  const browser = process.env.BROWSER || "firefox";

  switch (browser) {
    case "chrome":
      return chromium.launch(launchOptions);
    case "firefox":
      return firefox.launch(launchOptions);
    case "webkit":
      return webkit.launch(launchOptions);
    default:
      throw new Error("Invalid browser");
  }
};
