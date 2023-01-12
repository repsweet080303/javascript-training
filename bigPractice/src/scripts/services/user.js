import { axiosConfig } from '../helpers/axiosConfig';

/**
 * function getUser get data from Json server
 * @param {Number} id - id of the user
 * @returns {Object} data - transmission data
 */
export const getUser = async (id) => {
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
