export default class RequestComponent {
  get createRequestBtn() {
    return $("#primarybtn");
  }

  get employeeNameInput() {
    return $("#employee");
  }

  get hardwareList() {
    return $("[aria-labelledby='Hardware_hidden']");
  }

  get hardwareOption() {
    return $('//body//li[contains(text(),"Lenovo ThinkPad")]');
  }

  get requestedDateInput() {
    return $("#requested-on");
  }

  get priorityList() {
    return $("[aria-labelledby='priority_hidden']");
  }

  get priorityOption() {
    return $("#priority_popup");
  }

  get successPopup() {
    return $("#toast_type");
  }

  get submitBtn() {
    return $("button=Submit Request");
  }

  async createRequest(name, date) {
    await this.createRequestBtn.click();
    await this.employeeNameInput.setValue(name);
    await this.hardwareList.click();
    await this.hardwareOption.waitForDisplayed({ timeout: 3000 });
    await this.hardwareOption.click();
    await this.requestedDateInput.setValue(date);
    await this.priorityList.click();
    await this.priorityOption.click();
    await browser.pause(3000);
    await this.submitBtn.click();
  }

  get approveBtn() {
    return $('button.e-approve[title="Approve"]');
  }

  get approveMessage() {
    return $('td.e-rowcell[index="0"]');
  }
}
