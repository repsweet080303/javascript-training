import axiosConfig from '../helpers/axiosConfig';

/**
 * function getUsers get data from Json server
 * @returns {Object} data - transmission data
 */
const getUsers = async () => {
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

export default getUsers;
