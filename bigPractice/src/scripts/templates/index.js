export default class Template {
  constructor() {
    this.active = '';
    this.labelStatus = '';
  }

  /**
   * assigns data to the template
   * @param {data} is Array
   * @returns {String}
   */

  renderTableData(data) {
    const tableUsers = data.map((user) => this.renderUser(user));
    return tableUsers.join(' ');
  }

  /**
   * render row table with user
   * @param {data} is Object
   * @returns {String}
   */
  renderUser(data) {
    this.active = data.isActive ? 'status-item--active' : '';
    this.labelStatus = data.isActive ? 'Active' : 'Not Active';
    return `
  <tr data-id= ${data.id}>
    <td class="table-primary__body__avatar table-primary__body__spacing">${data.avatar
    ? `<img class='avatar-user' src=${data.avatar} alt="Avatar ${data.name}"></img>`
    : `<div class='avatar-user__none' 
    ></div>`}
    </td>
    <td class="table-primary__body__fullname table-primary__body__spacing">${data.name}</td>
    <td class="table-primary__body__status table-primary__body__spacing">
      <div class="status-item ${this.active}">${this.labelStatus}</div></td>
    <td class="table-primary__body__email table-primary__body__spacing">${data.email}</td>
  </tr>
  `;
  }
}
