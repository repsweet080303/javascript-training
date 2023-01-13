export default class Template {
  constructor() {
    this.active = '';
    this.labelStatus = '';
  }

  /**
   * function render table
   * assigns data to the template
   * @param {Array} data - data transmission from API
   * @returns {String} template string
   */
  renderTableData(data) {
    const tableUsers = data.map((user) => this.renderUser(user));
    return tableUsers.join(' ');
  }

  /**
   * render user
   * @param {data} is Object
   * @returns {String} template string
   */
  renderUser(data) {
    this.active = data.isActive ? 'status-item--active' : '';
    this.labelStatus = data.isActive ? 'Active' : 'Not Active';
    return `
  <tr class='table-primary__user' data-id= ${data.id}>
    <td class="table-primary__col__avatar table-primary__body__row">${data.avatar
    ? `<img class='avatar-user' src=${data.avatar} alt="Avatar ${data.name}"></img>`
    : `<div class='avatar-user__none' 
    >${data.name.toUpperCase().charAt(0)}</div>`}
    </td>
    <td class="table-primary__col__full-name table-primary__body__row">${data.name}</td>
    <td class="table-primary__col__status table-primary__body__row">
      <div class="status-item ${this.active}">${this.labelStatus}</div></td>
    <td class="table-primary__col__email table-primary__body__row">${data.email}</td>
  </tr>
  `;
  }
}
