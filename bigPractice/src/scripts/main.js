import Controller from './controllers/user';
import Template from './templates/user';
import UserView from './views/user';
import UsersView from './views/users';
import Users from './models/users';
import User from './models/user';

const template = new Template();
const userView = new UserView(template);
const usersView = new UsersView(template);
const users = new Users();
const user = new User();
const controller = new Controller(users, user, userView, usersView);

window.addEventListener('load', () => controller.handleRenderView());
