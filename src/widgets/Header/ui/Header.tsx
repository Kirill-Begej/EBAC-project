import { FC } from 'react'
import { useStickyHeader } from 'shared/lib/hooks/useStickyHeader'
import { classNames } from 'shared/lib/classNames/classNames'
import { Logo } from 'shared/ui/Logo/Logo'
import { Menu } from 'shared/ui/Menu/Menu'
import { SearchForm } from 'shared/ui/SearchForm/SearchForm'
import { EbacLink } from 'shared/ui/EbacLink/EbacLink'
import cls from './Header.module.css'

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  const { headerRef } = useStickyHeader()

  return (
    <header className={classNames(cls.header, {}, [className])} ref={headerRef}>
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

export default Header
