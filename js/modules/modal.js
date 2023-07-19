export default class Modal {
  constructor(buttonOpen, buttonClose, modal) {
    this.button = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.modal = document.querySelector(modal);
  }

  closeModal(event) {
    if (event) event.preventDefault();
    this.modal.style.display = "none";
  }

  openModal(event) {
    event.preventDefault();
    this.modal.style.display = "grid";
  }

  binder() {
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  listener() {
    this.button.addEventListener("click", this.openModal);
    this.buttonClose.addEventListener("click", this.closeModal);
    this.modal.addEventListener("click", (event) => {
      if (event.target === this.modal) this.closeModal();
    });
  }

  init() {
    this.binder();
    this.listener();
  }
}
