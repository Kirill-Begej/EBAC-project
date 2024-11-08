import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Logo } from 'shared/ui/Logo/Logo'
import { Menu } from 'shared/ui/Menu/Menu'
import cls from './Header.module.css'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => (
  <header className={classNames(cls.header, {}, [className])}>
    <div className={cls.container}>
      <Logo />
      <Menu />
      <div className={cls.rightMenu}></div>
    </div>
  </header>
)
