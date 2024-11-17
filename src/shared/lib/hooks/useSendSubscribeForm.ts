import { ChangeEvent, useState } from 'react'

export const useSendSubscribeForm = () => {
  const [sendForm, setSendForm] = useState(false)

  const sendFormHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSendForm(true)
  }

  return { sendForm, sendFormHandler }
}
