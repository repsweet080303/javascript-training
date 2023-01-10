import { axiosConfig } from '../helpers/axiosConfig';

/**
 * function getUser get data from Json server
 * @returns {Object}
 */
const getUser = async (id) => {
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

export default getUser;
