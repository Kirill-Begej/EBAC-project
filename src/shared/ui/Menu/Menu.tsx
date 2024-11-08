import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { MenuLink } from 'shared/ui/MenuLink/MenuLink'
import cls from './Menu.module.css'

interface MenuProps {
  className?: string
}

const menuData = [
  'Diseño',
  'Programación & Data',
  'Gaming',
  'Marketing',
  'Software',
  'Carrera'
]

export const Menu: FC<MenuProps> = ({ className }) => (
  <nav className={classNames(cls.menu, {}, [className])}>
    <menu className={cls.list}>
      {menuData.map((item, i) => (
        <li className={cls.item} key={i}>
          <MenuLink to={'#'}>{item}</MenuLink>
        </li>
      ))}
    </menu>
  </nav>
)
