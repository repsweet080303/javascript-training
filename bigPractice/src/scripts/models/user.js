import { createUser } from '../services/user';

export default class User {
  constructor() {
    this.avatar = '';
    this.email = '';
    this.description = '';
  }

  async addUser(username) {
    try {
      this.avatar = '';

      const user = {
        avatar: '',
        name: username,
        isActive: false,
        email: '',
        description: '',
        registered: new Date().getTime / 1000,
        lastUpdated: new Date().getTime / 1000,
      };
      const response = await createUser(user);
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
