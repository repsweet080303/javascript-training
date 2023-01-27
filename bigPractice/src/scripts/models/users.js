import getUsers from '../services/users';

export default class Users {
  constructor() {
    this.users = [];
  }

  /**
  * function getAllUser get Array users
  * by getUsers and assign them to users
  * @returns {Object} data - transmission data
  */
  async getAllUser() {
    try {
      const response = await getUsers();
      this.users = response.data;

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
   * function searchUsers
   * @param {String} data - value input search
   * @returns {Array} response - list transmission data
   */
  searchUsers(data) {
    try {
      const response = this.users.filter((user) => user.name.toLowerCase().includes(data));
      return {
        data: response,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error,
      };
    }
  }
}
