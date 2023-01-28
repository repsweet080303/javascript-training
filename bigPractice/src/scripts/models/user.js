import {
  createUser, getUserById, updateUserById, deleteUserById,
} from '../services/user';

import getUsers from '../services/users';

export default class User {
  constructor() {
    this.avatar = '';
    this.isActive = false;
    this.email = '';
    this.description = '';
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

  static async getUserInfo(id) {
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

  static async updateUser(id, data) {
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
  static async deleteUser(id) {
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
