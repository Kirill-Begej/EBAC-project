import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Social.module.css'
import { socialData } from './model/socialData'

interface SocialProps {
  className?: string
}

export const Social: FC<SocialProps> = ({ className }) => (
  <ul className={classNames(cls.social, {}, [className])}>
    {socialData.map((item, i) => (
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
