import { querySelectorElement } from '../helpers/axiosConfig';

export default class View {
  constructor(template) {
    this.template = template;

    // select table body
    this.tableBody = querySelectorElement('.table-primary__body');
    this.table = querySelectorElement('.table-primary');

    // select option
    this.option = querySelectorElement('.navbar__option');

    // select navbar
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
  }

  /**
 * function renderTable in view, assigne data
 * and call function renderTableData from class template
 * then assign in table selector
 * @returns {String}
 */
  async renderTable(data) {
    this.tableBody.innerHTML = this.template.renderTableData(data);
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
      this.info.classList.remove('d-hidden');
    });
  }

  /**
 * function bindAddUser get parameter is
 * handler function and call back function
 * with input value
 * @callback handlefunction
 */
  bindAddUser(handlefunction) {
    this.btnSave.addEventListener('click', async () => {
      const response = await handlefunction(this.input.value);
      const newElement = this.template.renderUser(response.data);

      this.input.value = '';
      this.popupAdd.classList.add('d-hidden');

      const newRow = `${this.tableBody.innerHTML} ${newElement}`;
      this.tableBoy.innerHTML = newRow;
    });
  }
}
