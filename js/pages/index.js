import * as constants from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import SubscribeForm from '../components/SubscribeForm.js';

const enableValidation = ({ validationConfig, emailRegexp }) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement, emailRegexp);
    validator.enableValidation();
  });
};

const subscribeForm = new SubscribeForm(constants.subscribeFormConfig);

enableValidation(constants);
subscribeForm.sendSuccessForm();
