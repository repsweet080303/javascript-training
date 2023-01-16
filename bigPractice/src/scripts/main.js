import Controller from './controllers/user';
import Template from './templates/user';
import View from './views/users';
import Users from './models/users';
import User from './models/user';

const template = new Template();
const view = new View(template);
const users = new Users();
const user = new User();
const controller = new Controller(users, user, view);

window.addEventListener('load', () => controller.handleRenderView());
