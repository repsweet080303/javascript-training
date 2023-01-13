import { createUser, getUserById } from '../services/user';

export default class User {
  constructor() {
    this.avatar = '';
    this.isActive = false;
    this.email = '';
    this.description = '';
  }

  /**
 * @param {String} username - input value
 * @returns {Object} user - object information user
 */
  async addUser(username) {
    try {
      const user = {
        avatar: this.avatar,
        name: username,
        isActive: this.isActive,
        email: this.email,
        description: this.description,
        registered: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
      };

      const response = await createUser(user);

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
 * @param {Number} id - id user
 * @returns {Object} user - object by id
 */

  // eslint-disable-next-line class-methods-use-this
  async getUserInfo(id) {
    try {
      const response = await getUserById(id);

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
}
