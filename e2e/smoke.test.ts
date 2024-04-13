import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Poly Zagreb");
  await expect(
    page.getByRole("heading", { name: "Poly Zagreb" })
  ).toBeVisible();
});
