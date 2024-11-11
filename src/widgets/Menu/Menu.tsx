import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { MenuLink } from 'shared/ui/MenuLink/MenuLink'
import { UseMenuContext } from 'app/providers/StoreProvider'
import cls from './Menu.module.css'

interface MenuProps {
  className?: string
}

export const Menu: FC<MenuProps> = ({ className }) => {
  const menu = UseMenuContext()

  // eslint-disable-next-line no-console
  console.log(menu)

  return (
    <nav className={classNames(cls.menu, {}, [className])}>
      <menu className={cls.list}>
        {menu?.header &&
          menu.header.map((item, i) => (
            <li className={cls.item} key={i}>
              <MenuLink to={item.url}>{item.label}</MenuLink>
            </li>
          ))}
      </menu>
    </nav>
  )
}
