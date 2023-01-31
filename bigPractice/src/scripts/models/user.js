import {
  createUser, getUserById, updateUserById, deleteUserById,
} from '../services/user';

export default class User {

  /**
   * function addUser
   * @param {String} username - input value
   * @returns {Object} user - object information user
  */
  async add(username) {
      const user = {
        avatar: '',
        name: username,
        isActive: false,
        email: '',
        description: '',
        registered: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
      };

      const response = await createUser(user);
      return {
        data: response.data,
        error: null,
      };
  }

  /**
   * function getUserInfo
   * @param {Number} id - id user
   * @returns {Object} data - data transmission
  */

   async getUserInfo(id) {
      const response = await getUserById(id);

      return {
        data: response.data,
        error: null,
      };
  }

  /**
  * function updateUser
  * @param {Number} id - id user
  * @param {Object} data - data update user
  * @returns {Object} data - data transmission
  */

   async update(id, data) {
      const updatedUser = {
        ...data,
        lastUpdated: new Date().toString(),
      };

      const response = await updateUserById(id, updatedUser);
      return {
        data: response.data,
        error: null,
      };
  }

  /**
   * function deleteUser
  * @param {Number} id - id user
  * @returns {Object} data - data transmission
  */
   async delete(id) {
      const response = await deleteUserById(id);

      return {
        data: response.data,
        error: null,
      };
  }
}
