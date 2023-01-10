import Controller from './controllers/users';
import Template from './templates';
import View from './views';
import Users from './models/users';

const template = new Template();
const view = new View(template);
const users = new Users();
const controller = new Controller(users, view);

const renderView = controller.handleRenderView();

window.addEventListener('load', () => renderView);
