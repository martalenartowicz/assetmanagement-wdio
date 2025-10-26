import pages from "../pageobjects";

describe("IT Asset Management", () => {
  beforeEach("open dashboard page", async function () {
    await pages("dashboard").open("/");
  });

  it("checks PAGE TITLE", async () => {
    expect(await pages("dashboard").getTitle()).toHaveText(
      "IT Asset Management - Essential JS 2 for Vue - Syncfusion"
    );
  });
  it("checks REQUEST BUTTON", async () => {
    await pages("dashboard").dashboardComponent.requestsButton.click();
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("Requests");
  });
  it("checks LICENSE BUTTON", async () => {
    await pages("dashboard").dashboardComponent.licensesButton.click();
    expect(await browser.getUrl()).toContain("Licenses");
  });
  it("checks NOTIFICATIONS BUTTON", async () => {
    await pages("dashboard").dashboardComponent.notificationsButton.click();
    expect(
      await pages("dashboard").dashboardComponent.notificationsNav
    ).toBeDisplayed();
  });
  it("checks REQUEST FORM", async () => {
    await pages("requests").open("/");
    await pages("requests").requestComponent.createRequest("Jane", "1/10/2025");
    expect(
      await pages("requests").requestComponent.successPopup
    ).toBeDisplayed();
    await pages("requests").requestComponent.approveBtn.click();
    expect(
      await pages("requests").requestComponent.approveMessage
    ).toBeDisplayed();
  });
  it("checks LICENSE FORM", async () => {
    await pages("license").open("/");
    await pages("license").licenseComponent.createLicense(
      "John Doe",
      "123",
      "1/1/2023",
      "Test License"
    );
    expect(
      await pages("license").licenseComponent.successPopup
    ).toBeDisplayed();
  });
  it.only("checks HARDWARE FORM", async () => {
    await pages("hardware").open("/");
    await pages("hardware").hardwareComponent.addNewHardware(
      "Dell XPS 13",
      "SN456",
      "INV789",
      "2/15/2023",
      "2/15/2025"
    );
    expect(
      await pages("hardware").hardwareComponent.successPopup
    ).toBeDisplayed();
  });
});
