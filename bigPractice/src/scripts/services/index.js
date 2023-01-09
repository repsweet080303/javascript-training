import { axiosConfig } from '../helpers/axiosConfig';

/**
 * function getUsers get data from Json server
 * @returns {Array}
 */
export const getUsers = async () => {
  try {
    const response = await axiosConfig.get('/users');
    return response.data;
  } catch (error) {
    return error;
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
