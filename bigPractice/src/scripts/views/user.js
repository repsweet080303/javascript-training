import { querySelectorElement } from '../helpers/axiosConfig';

export default class {
  constructor(template) {
    this.template = template;

    // select table body
    this.tableBody = querySelectorElement('.table-primary__body');
    this.table = querySelectorElement('.table-primary');

    // select option
    this.option = querySelectorElement('.navbar__option');

    // select navbar
    this.navbar = querySelectorElement('.navbar');
    this.navbarSelect = querySelectorElement('.navbar__select');

    // select information user
    this.info = querySelectorElement('.info');

    // select user
    this.userSelect = querySelectorElement('.table-primary__user');

    // select modal
    this.modalInfo = querySelectorElement('.modal-add-user');

    // select button
    this.btnNew = querySelectorElement('.btn__new');
    this.btnSave = querySelectorElement('.btn__save');

    // select popup add user
    this.popupAdd = querySelectorElement('.modal-add-user');
    this.iconClose = querySelectorElement('.modal-add-user__icon--close');
    this.input = querySelectorElement('.form__input');

    // updated form
    this.isUpdate = false;

    // form update user
    this.formUpdate = querySelectorElement('.update-user');
  }

  /**
   * function bindOpenOption when button new
   * click, option add new user show
   */

  bindOpenOption() {
    this.btnNew.addEventListener('click', (event) => {
      event.stopPropagation();
      this.option.classList.remove('d-hidden');
    });
  }

  /**
   * function bindCloseOption when click
   * everywhere option add new user hidden
   */
  bindCloseOption() {
    window.addEventListener('click', () => {
      this.option.classList.add('d-hidden');
    });
  }

  /**
   * function bindOpenModel when option
   * add new user click
   * popup add new user show
   */
  bindOpenModal() {
    this.option.addEventListener('click', () => {
      this.option.classList.add('d-hidden');
      this.popupAdd.classList.remove('d-hidden');
    });
  }

  /**
   * function bindCloseModel when icon close
   * click, popup add new user hidden
   */
  bindCloseModal() {
    this.iconClose.addEventListener('click', () => {
      this.input.value = '';
      this.popupAdd.classList.add('d-hidden');
    });
  }

  /**
   * function bindSelectNav when click
   * select, navbar change color
   */
  bindSelectNav() {
    this.navbarSelect.addEventListener('click', () => {
      this.navbarSelect.classList.add('navbar__active');
    });
  }

  /**
 * function bindSelectUser get parameter is
 * handler function and call back function
 * with parameter id user
 * @callback handlefunction
 */
  bindSelectUser(handlefunction) {
    this.tableBody.addEventListener('click', async (event) => {
      event.stopPropagation();

      this.rowUser = event.target.closest('.table-primary__user');
      this.idUser = this.rowUser.getAttribute('data-id');

      await handlefunction(this.idUser);
    });
  }

  renderUserInfoDetail(data) {
    if (this.isUpdate) {
      this.info.classList.remove('d-hidden');
      this.info.innerHTML = this.template.renderUserDetail(data);
      // this.bindAfterUpdate(data, handle, handleHide);
    } else {
      this.info.classList.add('d-hidden');
      this.formUpdate.classList.remove('d-hidden');
      this.formUpdate.innerHTML = this.template.renderUpdateDetail(data);
    }
  }

  /**
 * function bindAddUser get parameter is
 * handler function and call back function
 * with input value
 * @callback handler
 */
  bindAddUser(handler) {
    this.btnSave.addEventListener('click', async () => {
      const response = await handler(this.input.value);
      const newElement = this.template.renderUser(response.data);

      this.input.value = '';
      this.popupAdd.classList.add('d-hidden');

      const newRow = `${this.tableBody.innerHTML} ${newElement}`;
      this.tableBody.innerHTML = newRow;
    });
  }
}
