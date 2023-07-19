export default class Modal {
  constructor(buttonOpen, buttonClose, modal) {
    this.button = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.modal = document.querySelector(modal);
  }

  closeModal(event) {
    event.preventDefault();
    this.modal.style.display = "none";
  }

  activeModal(event) {
    event.preventDefault();
    this.modal.style.display = "grid";
  }

  binder() {
    this.activeModal = this.activeModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  listener() {
    this.button.addEventListener("click", this.activeModal);
    this.buttonClose.addEventListener("click", this.closeModal);
  }

  init() {
    this.binder();
    this.listener();
  }
}
