import { querySelectorElement } from '../helpers/axiosConfig';

export default class View {
  constructor(template) {
    this.template = template;

    // select table body
    this.table = querySelectorElement('.table-primary__body');
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
}
