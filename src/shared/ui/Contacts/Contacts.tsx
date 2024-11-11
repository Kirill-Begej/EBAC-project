import { FC, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { UseContactsContext } from 'app/providers/StoreProvider/lib/UseContactsContext'
import cls from './Contacts.module.css'

interface IContactsData {
  title: string
  href: string
  linkText: string
  ariaLabel: string
}

interface ContactsProps {
  className?: string
}

export const Contacts: FC<ContactsProps> = ({ className }) => {
  const [data, setData] = useState<IContactsData[] | null>(null)
  const contacts = UseContactsContext()

  const formatPhoneNumber = (phoneNumber: string): string =>
    `+${phoneNumber?.slice(0, 2)} ${phoneNumber?.slice(2, 4)} ${phoneNumber?.slice(4, 8)}-${phoneNumber?.slice(8)}`

  useEffect(() => {
    setData([
      {
        title: 'WhatsApp',
        href: `https://wa.me/${contacts.whatsapp}`,
        linkText: formatPhoneNumber(contacts.whatsapp),
        ariaLabel: 'Link para nosso WhatsApp'
      },
      {
        title: 'Telefone',
        href: `tel:+${contacts.phone}`,
        linkText: formatPhoneNumber(contacts.phone),
        ariaLabel: 'Link para nosso telefone'
      },
      {
        title: 'email',
        href: `mailto:${contacts.email}`,
        linkText: contacts.email,
        ariaLabel: 'Link para nosso e-mail'
      }
    ])
  }, [contacts])

  return (
    <ul className={classNames(cls.contacts, {}, [className])}>
      {data &&
        data.map((item, i) => (
          <li className={cls.item} key={i}>
            <h6 className={cls.title}>{item.title}</h6>
            <a
              className={cls.link}
              href={item.href}
              target="_blank"
              aria-label={item.ariaLabel}
              rel="noreferrer"
            >
              {item.linkText}
            </a>
          </li>
        ))}
    </ul>
  )
}
