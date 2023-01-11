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
    this.inputValue = querySelectorElement('.form__input');
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

  bindOpenOption() {
    this.btnNew.addEventListener('click', (event) => {
      event.stopPropagation();
      this.option.classList.remove('d-hidden');
    });
  }

  bindCloseOption() {
    window.addEventListener('click', (event) => {
      event.stopPropagation();

      this.option.classList.add('d-hidden');
    });
  }
}
