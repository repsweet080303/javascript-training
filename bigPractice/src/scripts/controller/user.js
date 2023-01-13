import API_ERROR_MESSAGES from '../constants/notifications';

export default class Controller {
  /**
   * @param {users} users A users instance
   * @param {user} user A user instance
   * @param {view} view A view instance}
   */
  constructor(users, user, view) {
    this.users = users;
    this.user = user;
    this.view = view;

    // bind event toggle option add new user
    this.view.bindOpenOption();
    this.view.bindCloseOption();

    // bind event select navbar
    this.view.bindSelectNav();

    // // bind event select user
    this.view.bindSelectUser(this.handleUserInfo.bind(this));

    // bind event toggle modal input user name
    this.view.bindOpenModal();
    this.view.bindCloseModal();

    /**
     * bind event add user
     * @callback handleAddUser
     */
    this.view.bindAddUser(this.handleAddUser.bind(this));
  }

  /**
   * handle event render view
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
   * handle event add user
   * @param {string} username - input value
   * @returns {Object} data - transmission data
   */
  async handleAddUser(username) {
    try {
      const response = await this.user.addUser(username);

      if (response.error) {
        alert(API_ERROR_MESSAGES.ADD_USER);
      }

      return {
        data: response.data,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error,
      };
    }
  }

  /**
   * handle event add user
   * @param {Number} id - id of the user
   * @returns {Object} data - transmission data
   */
  async handleUserInfo(id) {
    const response = await this.user.getUserInfo(id);

    if (response.error) {
      alert(API_ERROR_MESSAGES.GET_USER_INFO);
    }
    return {
      data: response.data,
      error: null,
    };
  }
}
