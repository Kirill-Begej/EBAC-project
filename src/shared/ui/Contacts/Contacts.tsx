import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Contacts.module.css'
import { contactsData } from './model/contactsData'

interface ContactsProps {
  className?: string
}

export const Contacts: FC<ContactsProps> = ({ className }) => (
  <ul className={classNames(cls.contacts, {}, [className])}>
    {contactsData.map((item, i) => (
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
