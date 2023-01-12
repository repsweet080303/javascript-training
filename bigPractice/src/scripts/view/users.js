import { querySelectorElement } from '../helpers/axiosConfig';

export default class View {
  constructor(template) {
    this.template = template;

    // select table body
    this.table = querySelectorElement('.table-primary__body');

    // select option
    this.option = querySelectorElement('.navbar__option');

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
    this.table.innerHTML = this.template.renderTableData(data);
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

      const newRow = `${this.table.innerHTML} ${newElement}`;
      this.table.innerHTML = newRow;
    });
  }
}
