import LicenseComponent from "../components/license.component";
import Page from "./base.page";

export default class LicensePage extends Page {
  endpoint = "/IssuedLicenses";

  get licenseComponent() {
    return new LicenseComponent();
  }
}
