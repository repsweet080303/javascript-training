import { getUsers } from '../services/index';

export default class Users {
  constructor() {
    this.users = [];
  }

  /**
  * function getAllUser get Array users
  * by getUsers and assign them to users
  * @returns {Array}
  */
  async getAllUser() {
    const response = await getUsers();
    this.users = response;
    return response;
  }
}
