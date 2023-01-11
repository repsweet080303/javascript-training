import API_ERROR_MESSAGES from '../constants/notifications';

export default class Controller {
  constructor(users, user, view) {
    this.users = users;
    this.user = user;
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

  /**
   * function handleAddUser call function addUser
   * from model user and assign result to response
   * if response.error === true will alert message
   */
  async handleAddUser() {
    const response = await this.user.addUser();
    if (response.error) {
      alert(API_ERROR_MESSAGES.ADD_USER);
    }
  }
}
