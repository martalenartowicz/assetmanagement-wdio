export default class HardwareComponent {
  get addNewHardwareBtn() {
    return $("button[data-v-034f2cbc]");
  }

  get hardwareNameInput() {
    return $("#name");
  }

  get categoryList() {
    return $("[aria-labelledby='category_hidden']");
  }

  get categoryPopupElement() {
    return $('//body//li[contains(text(),"Laptop")]');
  }

  get serialNumberInput() {
    return $("#serial");
  }

  get invoiceIdInput() {
    return $("#invoice");
  }

  get dateOfPurchaseInput() {
    return $("#dop");
  }

  get warrantyDateInput() {
    return $("#weo");
  }

  get statusList() {
    return $("[aria-labelledby='status_hidden']");
  }

  get statusOption() {
    return $('//body//li[contains(text(),"Pending")]');
  }

  get submitBtn() {
    return $("button=Submit");
  }

  get successPopup() {
    return $("#toast_type");
  }

  async addNewHardware(
    name,
    serialNumber,
    invoiceId,
    dateOfPurchase,
    warrantyDate
  ) {
    await this.addNewHardwareBtn.click();
    //await this.hardwareNameInput.waitForEnabled({ timeout: 5000 });
    await this.hardwareNameInput.setValue(name);
    await this.categoryList.click();
    await this.categoryPopupElement.waitForDisplayed({ timeout: 3000 });
    await this.categoryPopupElement.click();
    await this.serialNumberInput.setValue(serialNumber);
    await this.invoiceIdInput.setValue(invoiceId);
    await this.dateOfPurchaseInput.setValue(dateOfPurchase);
    await this.warrantyDateInput.setValue(warrantyDate);
    await this.statusList.click();
    await this.statusOption.waitForDisplayed({ timeout: 3000 });
    await this.statusOption.click();
    await this.submitBtn.click();
  }
}
