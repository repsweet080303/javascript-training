import Controller from './controllers/user';
import Template from './templates/user';
import UserView from './views/user';
import UsersView from './views/users';
import SearchUser from './models/searchUser';
import User from './models/user';

const template = new Template();
const userView = new UserView(template);
const usersView = new UsersView(template);
const searchUser = new SearchUser();
const user = new User();
const controller = new Controller(searchUser, user, userView, usersView);

window.addEventListener('load', () => controller.handleRenderView());
