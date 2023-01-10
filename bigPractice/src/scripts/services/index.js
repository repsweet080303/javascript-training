import { axiosConfig } from '../helpers/axiosConfig';

/**
 * function getUsers get data from Json server
 * @returns {Object}
 */
export const getUsers = async () => {
  try {
    const response = await axiosConfig.get('/users');
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
 * function getUser get data from Json server
 * @returns {String}
 */
export const getUser = async (id) => {
  const response = await axiosConfig.get(`/users/${id}`);
  return response.data;
};
