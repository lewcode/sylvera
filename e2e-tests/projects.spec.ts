import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("http://localhost:3000/projects");

	await page.route("*/projects", async (route) => {
		const json = [
			{ id: 1, country: "United Kingdom", url: "someUrl", status: "ok" },
		];
		await route.fulfill({ json });
	});
});

test("page renders with cards", async ({ page }) => {
	const cards = await page.getByTestId("project-card");

	await expect(cards).toBeDefined();
});
