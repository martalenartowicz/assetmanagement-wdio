export default class LicenseComponent {
  get createLicenseBtn() {
    return $("button=Issue License");
  }

  get licenseNameInput() {
    return $('input[role="combobox"][type="text"]');
  }

  get softwareList() {
    return $("[aria-labelledby='software_hidden']");
  }

  get licenseKeyInput() {
    return $("#license-key");
  }

  get issuedOnDate() {
    return $("#issue-date");
  }

  get softwarePopup() {
    return $('//body//li[contains(text(),"Visual Studio 2017")]');
  }

  get noteInput() {
    return $("#note");
  }

  get submitBtn() {
    return $("button=Submit");
  }

  get successPopup() {
    return $("#toast_type");
  }

  async createLicense(name, licenseKey, issueDate, note) {
    await this.createLicenseBtn.click();
    await this.licenseNameInput.setValue(name);
    await this.softwareList.click();
    await this.softwarePopup.waitForDisplayed({ timeout: 3000 });
    await this.softwarePopup.click();
    await this.licenseKeyInput.setValue(licenseKey);
    await this.issuedOnDate.setValue(issueDate);
    await this.noteInput.setValue(note);
    await browser.pause(3000);
    await this.submitBtn.click();
  }
}
