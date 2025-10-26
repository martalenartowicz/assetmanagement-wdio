import { browser } from "@wdio/globals";
import DashboardComponent from "../components/dashboard.component.js";

export default class Page {
  baseUrl = "https://ej2.syncfusion.com/showcase/vue/assetmanagement/#";

  open(path) {
    return browser.url(`${this.baseUrl}${this.endpoint || ""}${path}`);
  }
  get dashboardComponent() {
    return new DashboardComponent();
  }
  async getTitle() {
    return await browser.getTitle();
  }
}
