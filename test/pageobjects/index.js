import Page from "./pages/base.page.js";
import LicensePage from "./pages/license.page.js";
import RequestsPage from "./pages/requests.page.js";
import HardwarePage from "./pages/hardware.page.js";

function pages(page) {
  const pages = {
    dashboard: new Page(),
    requests: new RequestsPage(),
    license: new LicensePage(),
    hardware: new HardwarePage(),
  };
  return pages[page.toLowerCase()];
}
export default pages;
