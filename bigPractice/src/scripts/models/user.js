import { createUser } from '../services/user';

export default class User {
  constructor() {
    this.avatar = '';
    this.isActive = false;
    this.email = '';
    this.description = '';
  }

  /**
 * function addUser post new user with username
 * and objact user to function createUser
 * @param {String}
 * @returns {Object}
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
}
