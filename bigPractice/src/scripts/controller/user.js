import API_ERROR_MESSAGES from '../constants/notifications';

export default class Controller {
  constructor(users, view) {
    this.users = users;
    this.view = view;
  }

  /**
   * function handleRenderView get data from model users
   * assigne param data from model users to view
   * through function renderTable
   */
  async handleRenderView() {
    const response = await this.users.getAllUser();
    if (response.error) {
      alert(API_ERROR_MESSAGES.GET_API);
    } else {
      this.view.renderTable(response.data);
    }
  }
}
