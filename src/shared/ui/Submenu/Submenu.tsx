import { FC, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ISubmenuData, submenuData } from './model/submenuData'
import cls from './Submenu.module.css'

export enum SubmenuType {
  CURSOS = 'CURSOS',
  WEBINARS = 'WEBINARS',
  SOBRE = 'SOBRE',
  BLOG = 'BLOG'
}

interface SubmenuProps {
  className?: string
  type: SubmenuType
}

export const Submenu: FC<SubmenuProps> = ({ className, type }) => {
  const [content, setContent] = useState<ISubmenuData | null>(null)

  useEffect(() => {
    const submenuItem = submenuData.find(item => item.label === type)
    setContent(submenuItem)
  }, [])

  return (
    <nav
      className={classNames(
        cls.submenu,
        {
          [cls.cursos]: SubmenuType.CURSOS === type,
          [cls.webinars]: SubmenuType.WEBINARS === type,
          [cls.sobre]: SubmenuType.SOBRE === type,
          [cls.blog]: SubmenuType.BLOG === type
        },
        [className]
      )}
      aria-label="Menu de navegação adicional"
    >
      <span className={(cls.title, cls.span)}>{type}</span>
      <input type="checkbox" className={cls.checkbox} id="courses" />
      <label
        htmlFor="courses"
        className={(cls.title, cls.titleCheckbox)}
        aria-label="Expandir menu adicional"
      >
        {type}
      </label>
      <menu className={cls.list}>
        {content &&
          content.items.map((item: any, i: any) => (
            <li className={cls.item} key={i}>
              <a href={item.url} className={cls.link}>
                {item.label}
              </a>
            </li>
          ))}
      </menu>
    </nav>
  )
}
