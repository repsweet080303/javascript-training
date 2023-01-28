export default class {
  /**
   * function searchUsers
   * @param {String} data - value input search
   * @returns {Array} response - list transmission data
   */
  static searchUsers(data, users) {
    try {
      const response = users.filter((user) => user.name.toLowerCase().includes(data));
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
