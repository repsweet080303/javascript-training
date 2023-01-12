import Controller from './controller/user';
import Template from './template/user';
import View from './view/users';
import Users from './models/users';
import User from './models/user';

const template = new Template();
const view = new View(template);
const users = new Users();
const user = new User();
const controller = new Controller(users, user, view);

window.addEventListener('load', () => controller.handleRenderView());
