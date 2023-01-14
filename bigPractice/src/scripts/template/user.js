export default class Template {
  constructor() {
    this.active = '';
    this.labelStatus = '';
    this.activeUser = '';
    this.badgeStatus = '';
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

  renderUserDetail(data) {
    this.activeUser = data.isActive ? 'status-item--active' : '';
    this.badgeStatus = data.isActive ? 'Active' : 'Not Active';
    return `
          <div class="info__head__wrapper d-flex-between">
            <h3 class="info__head__title">User information</h3>
            <div class="status-item badge-spacing ${this.activeUser}">${this.badgeStatus}</div>
          <button class="btn__edit"><i class="fa-regular fa-pen"></i></button>
          </div>
        </div>
        <div class="info__body">
          <div class="info__body__wrapper">${data.avatar ? `<img class="info__body__image"
          src= ${data.avatar}
          alt= ${data.name}
        />` : `<div class='avatar-user__none avatar-user__large'>${data.name.toUpperCase().charAt(0)}</div>`}
            
            <div class="info__body__name">${data.name}</div>
          </div>
          <div class="info__body__template d-flex info__body__spacing">
            <i class="icon__email fa-regular fa-envelope"></i>

            <p class="info__body__title">Email:</p>
          </div>
          <div class="info__body__detail info__body__spacing">
            ${data.email ? data.email : 'unknown'}
          </div>
          <div class="info__body__template d-flex info__body__spacing">
            <i class="icon__clock fa-regular fa-clock"></i>
            <p class="info__body__title">Last visited:</p>
          </div>
          <div class="info__body__detail info__body__spacing">
            ${new Date(data.lastUpdated).toLocaleString()}
          </div>
        </div>
    `;
  }
}
