import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Logo } from 'shared/ui/Logo/Logo'
import { Menu } from 'shared/ui/Menu/Menu'
import { SearchForm } from 'shared/ui/SearchForm/SearchForm'
import { EbacLink } from 'shared/ui/EbacLink/EbacLink'
import { UseMenuContext } from 'app/providers/StoreProvider'
import cls from './Header.module.css'

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const store = UseMenuContext()

  // eslint-disable-next-line no-console
  console.log(store)

  return (
    <header className={classNames(cls.header, {}, [className])}>
      <div className={cls.container}>
        <Logo />
        <Menu className={cls.headerMenu} />
        <div className={cls.rightMenu}>
          <SearchForm />
          <EbacLink />
        </div>
      </div>
    </header>
  )
}
