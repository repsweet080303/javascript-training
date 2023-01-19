import { querySelectorElement } from '../helpers/axiosConfig';

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
 * @returns {String}
 */
  async renderTable(data) {
    this.tableBody.innerHTML = this.template.renderTableData(data);
  }

  async renderTableUpdate(data) {
    this.tableBody.innerHTML = this.template.renderTableDataUpdate(data);
  }
}
