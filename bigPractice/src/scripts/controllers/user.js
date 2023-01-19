import API_ERROR_MESSAGES from '../constants/notifications';

export default class Controller {
  /**
   * @param {users} users A users instance
   * @param {user} user A user instance
   * @param {userView} userView A userView instance
   * @param {usersView} usersView A userView instance
   */
  constructor(users, user, userView, usersView) {
    this.users = users;
    this.user = user;
    this.userView = userView;
    this.usersView = usersView;

    // bind event toggle option add new user
    this.userView.bindOpenOption();
    this.userView.bindCloseOption();

    // bind event select navbar
    this.userView.bindSelectNav();

    // bind event select user
    this.userView.bindSelectUser(this.handleViewUserDetail.bind(this));

    // bind event toggle modal input user name
    this.userView.bindOpenModal();
    this.userView.bindCloseModal();

    /**
     * bind event add user
     * @callback handleAddUser
     */
    this.userView.bindAddUser(this.handleAddUser.bind(this));
  }

  /**
   * handle event render view
   */
  async handleRenderView() {
    const response = await this.users.getAllUser();
    if (response.error) {
      alert(API_ERROR_MESSAGES.GET_API);
    } else {
      this.usersView.renderTable(response.data);
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

  async handleUpdateUser(id, data) {
    const response = await this.user.constructor.updateUser(id, data);

    if (response.error) {
      alert(API_ERROR_MESSAGES.UPDATE_USER);
    } else {
      const dataAllUser = await this.users.getAllUser();

      this.usersView.renderTableUpdate(dataAllUser);
    }
  }

  /**
   * handle event view detail user
   * @param {Number} id - id of the user
   */
  async handleViewUserDetail(id) {
    const response = await this.user.constructor.getUserInfo(id);

    if (response.error) {
      alert(API_ERROR_MESSAGES.GET_USER_INFO);
      return;
    }

    this.userView.renderUserInfoDetail(response.data, this.handleUpdateUser.bind(this));
  }
}
