export default class FormValidator {
  constructor({
    inputSelector,
    checkboxSelector,
    inputLabelSelector,
    buttonSelector,
    inputErrorClass,
    inputSuccessClass,
    inactiveButtonClass,
  },
  formElement,
  emailRegexp,
  ) {
    this._formElement = formElement;
    this._emailRegexp = emailRegexp;
    this._input = formElement.querySelector(inputSelector);
    this._checkbox = formElement.querySelector(checkboxSelector);
    this._inputLabel = formElement.querySelector(inputLabelSelector);
    this._button = formElement.querySelector(buttonSelector);
    this._inputErrorClass = inputErrorClass;
    this._inputSuccessClass = inputSuccessClass;
    this._inactiveButtonClass = inactiveButtonClass;
  }

  enableValidation() {
    this._toggleButtonState(this._input.value, this._checkExistCheckbox(this._checkbox));
    this._setEventListener();
  };

  _inputIsValid(inputValue) {
    return inputValue.match(this._emailRegexp)?.length ? true : false;
  };

  _checkExistCheckbox(checkbox) {
    return checkbox ? this._checkbox.checked : true;
  }

  _toggleButtonState(inputValue, checkbox) {
    if (this._inputIsValid(inputValue) && checkbox) {
      this._button.disabled = true;
      this._button.classList.remove(this._inactiveButtonClass);
    } else {
      this._button.disabled = false;
      this._button.classList.add(this._inactiveButtonClass);
    }
  }

  _toggleInputError(inputValue) {
    if (this._inputIsValid(inputValue)) {
      this._inputLabel.classList.remove(this._inputErrorClass);
      this._inputLabel.classList.add(this._inputSuccessClass);
    } else {
      this._inputLabel.classList.add(this._inputErrorClass);
      this._inputLabel.classList.remove(this._inputSuccessClass);
    }
  }

  _removeInputError() {
    this._inputLabel.classList.remove(this._inputErrorClass);
  }

  _setEventListener() {
    this._input.addEventListener('input', (e) => {
      this._toggleInputError(e.target.value);
      this._toggleButtonState(e.target.value, this._checkExistCheckbox(this._checkbox));
    });
    this._input.addEventListener('focus', (e) => {
      if (e.target.value) {
        this._toggleInputError(e.target.value);
      }
    });
    this._input.addEventListener('blur', () => {
      this._removeInputError();
    });
    if (this._checkbox) {
      this._checkbox.addEventListener('input', (e) => {
        this._toggleButtonState(this._input.value, this._checkExistCheckbox(e.target));
      });
    }
  };
}
