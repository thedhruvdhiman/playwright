import { execSync } from "child_process";
import { ALLURE_RESULTS_DIR, ALLURE_REPORT_DIR } from "./allure-dir.js";

export default async function globalTeardown() {
  try {
    console.log(`Generating Allure report from results: ${ALLURE_RESULTS_DIR}`);
    execSync(
      `npx allure generate "${ALLURE_RESULTS_DIR}" -o "${ALLURE_REPORT_DIR}" --clean`,
      {
        stdio: "inherit",
        env: process.env,
        cwd: process.cwd(),
      },
    );
    console.log(`Allure report generated at: ${ALLURE_REPORT_DIR}`);
  } catch (error) {
    console.error("Failed to generate Allure report:", error);
  }
}
