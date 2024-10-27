export const emailRegexp = /^(([0-9A-Za-zА-Яа-я]{1}[-0-9A-zА-Яа-я\.]{1,}[0-9A-Za-zА-Яа-я]{1})@([-A-Za-zА-Яа-я]{1,}\.){1,2}[-A-Za-zА-Яа-я]{2,})$/;

export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.input__element',
  checkboxSelector: '.checkbox__element',
  inputLabelSelector: '.input',
  buttonSelector: '.button',
  inputErrorClass: 'input_event_error',
  inputSuccessClass: 'input_event_success',
  inactiveButtonClass: 'button_inactive',
};

export const subscribeFormConfig = {
  formSelector: '.subscribe__form',
  sendSuccessClass: 'subscribe__form_hide',
};
