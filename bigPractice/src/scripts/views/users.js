import { querySelectorElement } from '../helpers/selectors';

export default class {
  constructor(template) {
    this.template = template;

    // select table body
    this.tableBody = querySelectorElement('.table-primary__body');
    this.table = querySelectorElement('.table-primary');
  }

  /**
 * function renderTable in view, assigne data
 * and call function renderTableData from class template
 * then assign in table selector
 * @param {Object} data - data of the user
 */
  async renderTable(data) {
    this.tableBody.innerHTML = this.template.renderTableData(data);
  }
}
