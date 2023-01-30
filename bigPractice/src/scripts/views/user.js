import { querySelectorElement } from '../helpers/selectors';
import { validateEmailRegex, validateNameEmpty } from '../helpers/validate';
import  changeBase64  from '../helpers/changeBaseImg';

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

    // input search
    this.searchTitle = querySelectorElement('.search__title');
  }

  /**
   * function bindOpenOption when button new
   * click, option add new user show
   */
  bindOpenOption() {
    const self = this ;
    this.btnNew.addEventListener('click', (event) => {
      event.stopPropagation();
      self.option.classList.remove('d-hidden');
    });
  }

  /**
   * function bindCloseOption when click
   * everywhere option add new user hidden
   */
  bindCloseOption() {
    const self = this ;
    window.addEventListener('click', () => {
      self.option.classList.add('d-hidden');
    });
  }

  /**
   * function bindOpenModel when option
   * add new user click
   * popup add new user show
   */
  bindOpenModal() {
    const self = this ;
    this.option.addEventListener('click', () => {
      self.option.classList.add('d-hidden');
      self.popupAdd.classList.remove('d-hidden');
    });
  }

  /**
   * function bindCloseModel when icon close
   * clicked, popup add new user hidden
   */
  bindCloseModal() {
    const self = this ;
    this.iconClose.addEventListener('click', () => {
      self.input.value = '';
      self.popupAdd.classList.add('d-hidden');
    });
  }

  /**
   * function bindSelectNav when click
   * select, navbar change color
   */
  bindSelectNav() {
    const self = this ;
    this.navbarSelect.addEventListener('click', () => {
      self.navbarSelect.classList.add('navbar__active');
    });
  }

  /**
  * function bindSelectUser get parameter is
  * handler function and call back function
  * with parameter id user
  * @param {Function} handle - callback handler for select user
  */
  bindSelectUser(handler) {
    const self = this ;
    this.tableBody.addEventListener('click', async (event) => {
      event.stopPropagation();

      self.rowUser = event.target.closest('.table-primary__user');
      self.idUser = self.rowUser.getAttribute('data-id');

      await handler(self.idUser);
    });
  }

  /**
   * function renderUserInfoDetail
   * @param {Object} data - information of user
   * @param {Function} handleUpdate - callback handler for update
   */
  renderUserInfoDetail(data, handleUpdate, handleDelete) {
    if (this.isUpdate) {
      this.info.classList.add('d-hidden');
      this.formUpdate.classList.remove('d-hidden');
      this.formUpdate.innerHTML = this.template.renderUpdateDetail(data);

      this.bindActiveUpdate(data, handleUpdate, handleDelete);
    } else {
      this.searchTitle.style.paddingRight = '600px';

      this.info.classList.remove('d-hidden');
      this.info.innerHTML = this.template.renderUserDetail(data);

      this.bindOpenUpdateForm(data, handleUpdate, handleDelete);
    }
  }

  /**
   * function bindOpenUpdateForm
   * @param {Object} data - information of user
   * @param {Function} handleUpdate - callback handler for update
   */
  bindOpenUpdateForm(data, handleUpdate, handleDelete) {
    const self = this ;

    this.btnPencil = querySelectorElement('.btn__edit');
    this.btnPencil.addEventListener('click', () => {
      self.searchTitle.style.paddingRight = '495px';
      self.isUpdate = true;

      self.info.classList.add('d-hidden');
      self.formUpdate.classList.remove('d-hidden');
      self.formUpdate.innerHTML = self.template.renderUpdateDetail(data);

      self.bindActiveUpdate(data, handleUpdate, handleDelete);
    });
  }

  /**
   * function bindActiveUpdate
   * @param {Object} data - information of user
   * @param {Function} handleUpdate - callback handler for update
   */
  bindActiveUpdate(data, handleUpdate, handleDelete) {
    this.fileUpload = document.querySelectorAll('.update-user__image');

    this.bindCloseUpdateForm(data);
    this.bindChangeStatus();
    this.bindUpdateAvatar(this.fileUpload);
    this.bindUpdateUser(data, handleUpdate);
    this.bindOpenPopupDelete();
    this.bindDeleteUser(data, handleDelete);
    this.bindClosePopupDelete();
  }

  /**
   * function bindCloseUpdateForm
   * @param {Object} data - information of user
   */
  bindCloseUpdateForm(data) {
    const self = this ;

    this.btnBack = querySelectorElement('.btn__arrow');
    this.btnBack.addEventListener('click', () => {
      self.isUpdate = true;
      self.formUpdate.classList.add('d-hidden');
      self.info.classList.remove('d-hidden');
      self.info.innerHTML = self.template.renderUserDetail(data);
      self.bindOpenUpdateForm(data);
    });
  }

  /**
   * function bindCloseUpdateForm
   */
  bindChangeStatus() {
    const self = this ;
    this.btnSwitch = querySelectorElement('.btn__toggle__check');
    this.statusLabel = querySelectorElement('.status-item--update');

    this.btnSwitch.addEventListener('click', () => {
      const isChecked = self.btnSwitch.checked ? 'Active' : 'Not active';
      const action = self.btnSwitch.checked ? 'add' : 'remove';

      self.statusLabel.classList[action]('status-item--active');
      self.statusLabel.innerHTML = isChecked;
    });
  }

  /**
   * function bindUpdateAvatar
   * @param {Object} fileUpload - file image upload for user
   */
  bindUpdateAvatar(fileUpload) {
    const self = this ;

    this.avatarUser = querySelectorElement('.update-user__body__wrapper');

    fileUpload.forEach((element) => {
      element.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const avatar = document.createElement('img');
        avatar.src = await changeBase64(file);
        avatar.classList.add('update-user__body__img');

        self.avatarUser.innerHTML = '';
        self.avatarUser.appendChild(avatar);
      });
    });
  }

  /**
   * function bindUpdateUser
   * @param {Object} data - information of user
   * @param {Function} handleUpdate - function handle update
   */
  bindUpdateUser(data, handleUpdate) {
    const self = this ;

    this.btnSave = querySelectorElement('.btn__save-info');
    this.inputName = querySelectorElement('#input__name');
    this.inputEmail = querySelectorElement('#input__email');
    this.statusActive = querySelectorElement('.btn__toggle__check');
    this.bio = querySelectorElement('.update-user__body__details');

    this.btnSave.addEventListener('click', () => {
      const avatar = querySelectorElement('.update-user__body__img');
      const msgName = querySelectorElement('.name--error');
      const msgEmail = querySelectorElement('.email--error');

      if (validateNameEmpty(self.inputName.value)) {
        msgName.classList.remove('d-hidden');
      } else if (validateEmailRegex(self.inputEmail.value)) {
        msgName.classList.add('d-hidden');
        msgEmail.classList.remove('d-hidden');
      } else {
        msgName.classList.add('d-hidden');
        msgEmail.classList.add('d-hidden');

        handleUpdate(data.id, {
          avatar: avatar.src,
          name: self.inputName.value,
          isActive: self.statusActive.checked,
          email: self.inputEmail.value,
          description: self.bio.value,
        });
      }
    });
  }

  /**
  * function bindAddUser
  * @param {Function} handler - handler function add user
  */
  bindAddUser(handler) {
    const self = this ;

    this.btnSave.addEventListener('click', async () => {
      const response = await handler(self.input.value);
      const newElement = self.template.renderUser(response.data);

      self.input.value = '';
      self.popupAdd.classList.add('d-hidden');

      const newRow = `${self.tableBody.innerHTML} ${newElement}`;
      self.tableBody.innerHTML = newRow;
    });
  }

  /**
   * function bindOpenPopupDelete
   */
  bindOpenPopupDelete() {
    const self = this ;

    this.btnDelete = querySelectorElement('.btn__delete');
    this.btnDelete.addEventListener('click', () => {
      self.popupDelete.classList.remove('d-hidden');
    });
  }

  /**
   * function bindClosePopupDelete
   */
  bindClosePopupDelete() {
    const self = this ;

    this.btnCancel.addEventListener('click', () => {
      self.popupDelete.classList.add('d-hidden');
    });
  }

  /**
   * function bindDeleteUser
   * @param {Object} data - information of user
   * @param {Function} handleDelete - callback function
   */
  bindDeleteUser(data, handleDelete) {
    const self = this ;

    this.btnRemove = querySelectorElement('.btn__remove');
    this.btnRemove.addEventListener('click', () => {
      handleDelete(data.id);
      self.popupDelete.classList.add('d-hidden');
      self.formUpdate.classList.add('d-hidden');
    });
  }

  /**
   * bindTogglePopup
   * @param {String} message - message for error
   */
  bindTogglePopup(message) {
    const self = this ;

    this.popupError = querySelectorElement('.popup');
    this.popupMsg = querySelectorElement('.popup__message');
    this.btnBack = querySelectorElement('.btn__back');

    this.popupError.classList.remove('d-hidden');
    this.popupMsg.innerHTML = message;

    this.btnBack.addEventListener('click', () => {
      self.popupError.classList.add('d-hidden');
    });
  }
}
