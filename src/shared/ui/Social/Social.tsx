import { FC, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { UseContactsContext } from 'app/providers/StoreProvider'
import SocialLink from 'shared/assets/img/social-link-icon.svg'
import cls from './Social.module.css'

interface ISocialData {
  href: string
  ariaLabel: string
  image: string
}

interface SocialProps {
  className?: string
}

export const Social: FC<SocialProps> = ({ className }) => {
  const [data, setData] = useState<ISocialData[] | null>(null)
  const contacts = UseContactsContext()

  useEffect(() => {
    setData([
      {
        href: contacts.instagram,
        ariaLabel: 'Link para nosso Instagram',
        image: `${SocialLink}#instagram`
      },
      {
        href: contacts.facebook,
        ariaLabel: 'Link para nosso Facebook',
        image: `${SocialLink}#facebook`
      },
      {
        href: contacts.youtube,
        ariaLabel: 'Link para nosso Youtube',
        image: `${SocialLink}#youtube`
      },
      {
        href: contacts.linkedin,
        ariaLabel: 'Link para nosso LinkedIn',
        image: `${SocialLink}#linkedin`
      }
    ])
  }, [contacts])

  return (
    <ul className={classNames(cls.social, {}, [className])}>
      {data &&
        data.map((item, i) => (
          <li className={cls.item} key={i}>
            <a
              href={item.href}
              className={cls.link}
              target="_blank"
              aria-label={item.ariaLabel}
              rel="noreferrer"
            >
              <svg className={cls.image}>
                <use href={item.image}></use>
              </svg>
            </a>
          </li>
        ))}
    </ul>
  )
}
