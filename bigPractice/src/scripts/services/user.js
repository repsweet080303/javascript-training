import axiosConfig from '../helpers/axiosConfig';

/**
 * function createUser  use method POST
 * new user to data
 * @param {Object} user with more information
 * @returns {Object} data - transmission data
 */
export const createUser = async (data) => {
  try {
    const response = await axiosConfig.post('/users', data);

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
};

/**
 * function getUserById with method GET
 * @param {Number} id - id of user
 * @returns {Object} data - transmission data
 */
export const getUserById = async (id) => {
  try {
    const response = await axiosConfig.get(`/users/${id}`);

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
};

/**
 * function updateUser use PATCH method
 * to update user to data
 * @param {Number} id - id of user
 * @param {Object} data - object to update information user
 * @returns {Object} data - transmission data
 */
export const updateUserById = async (id, data) => {
  try {
    const response = await axiosConfig.patch(`/users/${id}`, data);

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
};

export const deleteUserById = async (id) => {
  try {
    const response = await axiosConfig.delete(`/users/${id}`);

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
};
