import Controller from './controller/user';
import Template from './template/user';
import View from './view/users';
import Users from './models/users';

const template = new Template();
const view = new View(template);
const users = new Users();
const controller = new Controller(users, view);

window.addEventListener('load', () => controller.handleRenderView());
