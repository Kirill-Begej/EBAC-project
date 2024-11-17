import { classNames } from 'shared/lib/classNames/classNames'
import { UseMenuContext } from 'app/providers/StoreProvider'
import cls from './Logo.module.css'

interface LogoProps {
  className?: string
  logoFooter?: boolean
}

export const Logo = ({ className, logoFooter }: LogoProps) => {
  const menu = UseMenuContext()
  return (
    <>
      {menu?.logo && (
        <a
          href="#"
          className={classNames(cls.logo, { [cls.logoFooter]: logoFooter }, [
            className
          ])}
          aria-label="Link para a página inicial"
        >
          <svg className={cls.image}>
            <use href={`${require(`shared/assets${menu.logo}`)}#logo`}></use>
          </svg>
        </a>
      )}
    </>
  )
}
