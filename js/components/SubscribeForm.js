export default class SubscribeForm {
  constructor({ formSelector, sendSuccessClass }) {
    this._form = document.querySelector(formSelector);
    this._sendSuccessClass = sendSuccessClass;
  }

  sendSuccessForm() {
    this._sendFormHandler();
  }

  _sendFormHandler() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._form.classList.add(this._sendSuccessClass);
    });
  }
}
