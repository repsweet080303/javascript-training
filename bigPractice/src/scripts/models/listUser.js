import getUsers from '../services/users';

export default class {
  constructor() {
    this.users = [];
  }

  /**
  * function getAllUser get Array users
  * by getUsers and assign them to users
  * @returns {Object} data - transmission data
  */
   async getAllUser() {
      const response = await getUsers();
      this.users = response.data;

      return {
        data: response.data,
        error: null,
      };
  }

  /**
   * function searchUsers
   * @param {String} data - value input search
   * @returns {Array} response - list transmission data
   */
   searchUsers(data) {
      const response = this.users.filter((user) => user.name.toLowerCase().includes(data));
      return {
        data: response,
        error: null,
      };
  }
}
