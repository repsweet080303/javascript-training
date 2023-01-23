import { querySelectorElement } from '../helpers/selectors';
import { validateEmailRegex, validateNameEmpty } from '../helpers/validate';

export default class {
  constructor(template) {
    this.template = template;

    // select table body
    this.tableBody = querySelectorElement('.table-primary__body');
    this.table = querySelectorElement('.table-primary');

    // select option
    this.option = querySelectorElement('.navbar__option');

    // select navbar
    this.navbar = querySelectorElement('.navbar');
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
    this.btnCancel = querySelectorElement('.btn__cancel');

    // select popup add user
    this.popupAdd = querySelectorElement('.modal-add-user');
    this.iconClose = querySelectorElement('.modal-add-user__icon--close');
    this.input = querySelectorElement('.form__input');

    // select popup delete user
    this.popupDelete = querySelectorElement('.modal-delete-user');

    // updated form
    this.isUpdate = false;

    // form update user
    this.formUpdate = querySelectorElement('.update-user');
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
   * clicked, popup add new user hidden
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
 * @callback handler
 */
  bindSelectUser(handler) {
    this.tableBody.addEventListener('click', async (event) => {
      event.stopPropagation();

      this.rowUser = event.target.closest('.table-primary__user');
      this.idUser = this.rowUser.getAttribute('data-id');

      await handler(this.idUser);
    });
  }

  /**
   * function renderUserInfoDetail
   * @param {Object} data - information of user
   * @param {Function} handleUpdate - callback handler for update
   */
  renderUserInfoDetail(data, handleUpdate) {
    if (this.isUpdate) {
      this.info.classList.add('d-hidden');

      this.formUpdate.classList.remove('d-hidden');
      this.formUpdate.innerHTML = this.template.renderUpdateDetail(data);

      this.bindActiveUpdate(data, handleUpdate);
    } else {
      this.info.classList.remove('d-hidden');
      this.info.innerHTML = this.template.renderUserDetail(data);

      this.bindOpenUpdateForm(data, handleUpdate);
    }
  }

  /**
   * function bindOpenUpdateForm
   * @param {Object} data - information of user
   * @param {Function} handleUpdate - callback handler for update
   */
  bindOpenUpdateForm(data, handleUpdate) {
    this.btnArrow = querySelectorElement('.btn__edit');

    this.btnArrow.addEventListener('click', () => {
      this.isUpdate = true;

      this.info.classList.add('d-hidden');
      this.formUpdate.classList.remove('d-hidden');
      this.formUpdate.innerHTML = this.template.renderUpdateDetail(data);

      this.bindActiveUpdate(data, handleUpdate);
    });
  }

  /**
   * function bindActiveUpdate
   * @param {Object} data - information of user
   * @param {Function} handleUpdate - callback handler for update
   */
  bindActiveUpdate(data, handleUpdate) {
    // button back
    this.btnBack = querySelectorElement('.btn__arrow');

    // button delete
    this.btnDelete = querySelectorElement('.btn__delete');

    // avatar element
    this.fileUpload = document.querySelectorAll('.update-user__image');

    this.bindCloseUpdateForm(data, this.btnBack);
    this.bindChangeStatus();
    this.bindUpdateAvatar(this.fileUpload);
    this.bindUpdateUser(data, handleUpdate);
    this.bindOpenPopupDelete(this.btnDelete);
    this.bindClosePopupDelete();
  }

  /**
   * function bindCloseUpdateForm
   * @param {Object} data - information of user
   * @param {Element} btnBack - button arrow back
   */
  bindCloseUpdateForm(data, btnBack) {
    btnBack.addEventListener('click', () => {
      this.isUpdate = true;

      this.formUpdate.classList.add('d-hidden');
      this.info.classList.remove('d-hidden');
      this.info.innerHTML = this.template.renderUserDetail(data);
      this.bindOpenUpdateForm(data);
    });
  }

  /**
   * function bindCloseUpdateForm
   */
  bindChangeStatus() {
    this.btnSwitch = querySelectorElement('.btn__toggle__check');
    this.statusLabel = querySelectorElement('.status-item--update');

    this.btnSwitch.addEventListener('click', () => {
      const isChecked = this.btnSwitch.checked ? 'Active' : 'Not active';
      const action = this.btnSwitch.checked ? 'add' : 'remove';

      this.statusLabel.classList[action]('status-item--active');
      this.statusLabel.innerHTML = isChecked;
    });
  }

  /**
   * function bindUpdateAvatar
   * @param {Element} fileUpload - file image upload
   */
  bindUpdateAvatar(fileUpload) {
    this.avatarUser = querySelectorElement('.update-user__body__wrapper');

    fileUpload.forEach((element) => {
      element.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const avatar = document.createElement('img');
        avatar.src = await this.constructor.changeBase64(file);
        avatar.classList.add('update-user__body__img');

        this.avatarUser.innerHTML = '';
        this.avatarUser.appendChild(avatar);
      });
    });
  }

  /**
   * function changeBase64
   * @param {Element} file - file user uploaded
   * @return {Object} Promise - return resolve or reject
   */
  static changeBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
    });
  }

  /**
   * function bindUpdateUser
   * @param {Object} data - information of user
   * @param {Function} handleUpdate - function handle update
   */
  bindUpdateUser(data, handleUpdate) {
    this.btnSave = querySelectorElement('.btn__save-info');
    this.inputName = querySelectorElement('#input__name');
    this.inputEmail = querySelectorElement('#input__email');
    this.statusActive = querySelectorElement('.btn__toggle__check');
    this.bio = querySelectorElement('.update-user__body__details');

    this.btnSave.addEventListener('click', () => {
      const avatar = querySelectorElement('.update-user__body__img');
      const msgName = querySelectorElement('.name--error');
      const msgEmail = querySelectorElement('.email--error');

      if (validateNameEmpty(this.inputName.value)) {
        msgName.classList.remove('d-hidden');
      } else if (validateEmailRegex(this.inputEmail.value)) {
        msgName.classList.add('d-hidden');
        msgEmail.classList.remove('d-hidden');
      } else {
        msgName.classList.add('d-hidden');
        msgEmail.classList.add('d-hidden');

        handleUpdate(data.id, {
          avatar: avatar.src,
          name: this.inputName.value,
          isActive: this.statusActive.checked,
          email: this.inputEmail.value,
          description: this.bio.value,
        });
      }
    });
  }

  /**
 * function bindAddUser
  * @param {Function} handler - handler function add user
 */
  bindAddUser(handler) {
    this.btnSave.addEventListener('click', async () => {
      const response = await handler(this.input.value);
      const newElement = this.template.renderUser(response.data);

      this.input.value = '';
      this.popupAdd.classList.add('d-hidden');

      const newRow = `${this.tableBody.innerHTML} ${newElement}`;
      this.tableBody.innerHTML = newRow;
    });
  }

  bindOpenPopupDelete(btnDelete) {
    btnDelete.addEventListener('click', () => {
      this.popupDelete.classList.remove('d-hidden');
    });
  }

  bindClosePopupDelete() {
    this.btnCancel.addEventListener('click', () => {
      this.popupDelete.classList.add('d-hidden');
    });
  }
}
