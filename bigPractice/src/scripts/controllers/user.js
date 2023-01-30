import API_ERROR_MESSAGES from '../constants/notifications';

export default class Controller {
  /**
   * @param {searchUser} users A users instance
   * @param {user} user A user instance
   * @param {userView} userView A userView instance
   * @param {usersView} usersView A userView instance
   */
  constructor(searchUser, user, userView, usersView) {
    this.searchUser = searchUser;
    this.user = user;
    this.userView = userView;
    this.usersView = usersView;

    // bind event toggle option add new user
    this.userView.bindOpenOption();
    this.userView.bindCloseOption();

    // bind event toggle search input
    this.usersView.bindOpenSearch();
    this.usersView.bindCloseSearch();

    // bind event search user
    this.usersView.bindSearchUsers(this.handleSearchUsers.bind(this));

    // bind event select navbar
    this.userView.bindSelectNav();

    // bind event select user
    this.userView.bindSelectUser(this.handleViewUser.bind(this));

    // bind event toggle modal input user name
    this.userView.bindOpenModal();
    this.userView.bindCloseModal();

    // bind event add user
    this.userView.bindAddUser(this.handleAddUser.bind(this));
  }

  /**
   * handle event render view
   */
  async handleRenderView() {
    const response = await this.user.getAllUser();
    if (response.error) {
      this.userView.bindTogglePopup(API_ERROR_MESSAGES.GET_API);
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
        this.userView.bindTogglePopup(API_ERROR_MESSAGES.ADD_USER);
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
   * handle event update user
   * @param {string} id - id of user selected
   * @param {Object} data - value of user updated
   * @returns {Object} data - transmission data
   */
  async handleUpdateUser(id, data) {
    try {
      const response = await this.user.constructor.updateUser(id, data);

      if (response.erorr) {
        this.userView.bindTogglePopup(API_ERROR_MESSAGES.UPDATE_USER);
      } else {
        const dataAllUser = await this.user.getAllUser();

        if (dataAllUser.error) {
          this.userView.bindTogglePopup(API_ERROR_MESSAGES.UPDATE_USER);
        }

        this.usersView.renderTable(dataAllUser.data);
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
   * handle event delete user
   * @param {string} id - id of user selected
   * @returns {Object} data - transmission data
   */
  async handleDeleteUser(id) {
    try {
      const response = await this.user.constructor.deleteUser(id);

      if (response.error) {
        this.userView.bindTogglePopup(API_ERROR_MESSAGES.DELETE_USER);
      } else {
        const dataAllUser = await this.user.getAllUser();

        if (dataAllUser.error) {
          this.userView.bindTogglePopup(API_ERROR_MESSAGES.DELETE_USER);
        }

        this.usersView.renderTable(dataAllUser.data);
      }

      return {
        data: response.data,
        erorr: null,
      };
    } catch (error) {
      return {
        data: null,
        error,
      };
    }
  }

  /**
   * handle event view detail user
   * @param {Number} id - id of the user
   */
  async handleViewUser(id) {
    const response = await this.user.constructor.getUserInfo(id);

    if (response.error) {
      this.userView.bindTogglePopup(API_ERROR_MESSAGES.GET_USER_INFO);
      return;
    }

    this.userView.renderUserInfoDetail(
      response.data,
      this.handleUpdateUser.bind(this),
      this.handleDeleteUser.bind(this),
    );
  }

  /**
   * handle event search user
   * @param {String} data - value of input search
   */
  async handleSearchUsers(data) {
    const dataAllUser = await this.user.getAllUser();

    if (dataAllUser.error) {
      this.userView.bindTogglePopup(API_ERROR_MESSAGES.GET_API);
    } else {
      const response = this.searchUser.constructor.searchUsers(data, dataAllUser.data);

      if (response.error) {
        this.userView.bindTogglePopup('Search user error');
      }
      this.usersView.renderTable(response.data);
    }
  }
}
