import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Submenu.module.css'

export enum SubmenuType {
  CURSOS = 'CURSOS',
  WEBINARS = 'WEBINARS',
  SOBRE = 'SOBRE',
  BLOG = 'BLOG'
}

interface IItemsData {
  label: string
  url: string
}

interface SubmenuProps {
  className?: string
  data: {
    label: string
    items: IItemsData[]
  }
}

export const Submenu: FC<SubmenuProps> = ({ className, data }) => (
  <nav
    className={classNames(
      cls.submenu,
      {
        [cls.cursos]: SubmenuType.CURSOS === data.label,
        [cls.webinars]: SubmenuType.WEBINARS === data.label,
        [cls.sobre]: SubmenuType.SOBRE === data.label,
        [cls.blog]: SubmenuType.BLOG === data.label
      },
      [className]
    )}
    aria-label="Menu de navegação adicional"
  >
    <span className={(cls.title, cls.span)}>{data.label}</span>
    <input type="checkbox" className={cls.checkbox} id={data.label} />
    <label
      htmlFor={data.label}
      className={(cls.title, cls.titleCheckbox)}
      aria-label="Expandir menu adicional"
    >
      {data.label}
    </label>
    <menu className={cls.list}>
      {data.items.map((item: IItemsData, i: number) => (
        <li className={cls.item} key={i}>
          <a href={item.url} className={cls.link}>
            {item.label}
          </a>
        </li>
      ))}
    </menu>
  </nav>
)
