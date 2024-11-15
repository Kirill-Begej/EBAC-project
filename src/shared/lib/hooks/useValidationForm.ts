import { ChangeEvent, useState } from 'react'
import { emailRegexp } from 'app/constants/constants'

export const useValidationForm = () => {
  const [value, setValue] = useState(null)
  const [inputError, setInputError] = useState(false)
  const [inputSuccess, setInputSuccess] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [checkboxState, setCheckboxState] = useState(false)

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckboxState(e.target.checked)
    if (value?.match(emailRegexp)?.length && e.target.checked) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }

  const handleChangeForValidation = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (e.target.value.match(emailRegexp)?.length) {
      setInputError(false)
      setInputSuccess(true)
    } else {
      setInputError(true)
      setInputSuccess(false)
    }
    if (e.target.value.match(emailRegexp)?.length && checkboxState) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(emailRegexp)?.length) {
      setInputError(false)
      setInputSuccess(true)
    } else {
      setInputError(true)
      setInputSuccess(false)
    }
  }

  const handleBlur = () => {
    setInputError(false)
  }

  return {
    inputError,
    inputSuccess,
    buttonDisabled,
    handleChangeForValidation,
    handleFocus,
    handleBlur,
    handleCheckboxChange
  }
}
