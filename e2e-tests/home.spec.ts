import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("http://localhost:3000");
});

test("Home page renders with link", async ({ page }) => {
	const link = await page.getByText("Projects");

	await expect(link).toBeDefined();
});

test("Navigate to projects", async ({ page }) => {
	const link = await page.getByRole("link");

	console.log(link);
	await link.click();

	await expect(page.url()).toBe("http://localhost:3000/projects");
});
