import path from "path";

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

export const ALLURE_RESULTS_DIR = path.join(
  process.cwd(),
  "test-results/allure-results",
  timestamp,
);

export const ALLURE_REPORT_DIR = path.join(
  process.cwd(),
  "test-results/allure-report",
  timestamp,
);
