import { axiosConfig } from '../helpers';

export const getUsers = async () => {
  try {
    const response = await axiosConfig.get('/users');
    const result = response.data;
    return result;
  } catch (error) {
    return error;
  }
};

export const getUser = async (id) => {
  const response = await axiosConfig.get(`/users/${id}`);
  const result = response.data;
  return result;
};

getUsers().then((users) => console.log(users));
getUser(7).then((user) => console.log(user));
