import RequestComponent from "../components/request.compontent";
import Page from "./base.page";

export default class RequestsPage extends Page {
  endpoint = "/requests";

  get requestComponent() {
    return new RequestComponent();
  }
}
