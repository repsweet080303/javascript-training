import { getUsers } from '../services/index';

export default class Users {
  constructor() {
    this.users = [];
  }

  /**
  * function getAllUser get Array users
  * by getUsers and assign them to users
  * @returns {Object}
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
}
