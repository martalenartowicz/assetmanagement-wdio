import HardwareComponent from "../components/hardware.component";
import Page from "./base.page";

export default class HardwarePage extends Page {
  endpoint = "/Hardware";

  get hardwareComponent() {
    return new HardwareComponent();
  }
}
