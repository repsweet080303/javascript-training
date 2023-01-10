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
    this.view.renderTable(response.data);
  }
}
