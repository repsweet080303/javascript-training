import { querySelectorElement } from '../helpers/selectors';

export default class {
  constructor(template) {
    this.template = template;

    // select table body
    this.tableBody = querySelectorElement('.table-primary__body');
    this.table = querySelectorElement('.table-primary');

    // select button search
    this.btnSearch = querySelectorElement('.btn__search');
    this.btnClose = querySelectorElement('.btn__close');

    // select search component
    this.headerSearch = querySelectorElement('.search__header');
    this.wrapperSearch = querySelectorElement('.search__wrapper');

    // select search input
    this.searchInput = querySelectorElement('.search__input');
  }

  /**
 * function renderTable in view, assigne data
 * and call function renderTableData from class template
 * then assign in table selector
 * @param {Object} data - data of the user
 */
  renderTable(data) {
    this.tableBody.innerHTML = this.template.renderTableData(data);
  }

  bindOpenSearch() {
    this.btnSearch.addEventListener('click', () => {
      this.headerSearch.classList.add('d-hidden');
      this.wrapperSearch.classList.remove('d-hidden');
    });
  }

  bindCloseSearch() {
    this.btnClose.addEventListener('click', () => {
      this.headerSearch.classList.remove('d-hidden');
      this.wrapperSearch.classList.add('d-hidden');
    });
  }

  bindSearchUsers(handle) {
    this.searchInput.addEventListener('keyup', (e) => {
      handle(e.target.value.toLowerCase());
    });
  }
}
