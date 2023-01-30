import {
  createUser, getUserById, updateUserById, deleteUserById,
} from '../services/user';

export default class User {
  constructor() {
    this.avatar = '';
    this.isActive = false;
    this.email = '';
    this.description = '';
  }

  /**
   * function addUser
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
   * function getUserInfo
   * @param {Number} id - id user
   * @returns {Object} data - data transmission
  */

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

  /**
  * function updateUser
  * @param {Number} id - id user
  * @param {Object} data - data update user
  * @returns {Object} data - data transmission
  */

   async updateUser(id, data) {
    try {
      const updatedUser = {
        ...data,
        lastUpdated: new Date().toString(),
      };

      const response = await updateUserById(id, updatedUser);
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
   * function deleteUser
  * @param {Number} id - id user
  * @returns {Object} data - data transmission
  */
   async deleteUser(id) {
    try {
      const response = await deleteUserById(id);

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
