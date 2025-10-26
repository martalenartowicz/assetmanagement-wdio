export default class DashboardComponent {
  get requestsButton() {
    return $("#card-request");
  }

  get licensesButton() {
    return $("#card-license");
  }

  get notificationsButton() {
    return $("#bell");
  }

  get notificationsNav() {
    return $("#listview_notification");
  }
}
