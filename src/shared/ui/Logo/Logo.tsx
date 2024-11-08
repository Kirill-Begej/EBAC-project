import { classNames } from 'shared/lib/classNames/classNames'
import LogoImage from 'shared/assets/img/logo.svg'
import cls from './Logo.module.css'

interface LogoProps {
  className?: string
  logoFooter?: boolean
}

export const Logo = ({ className, logoFooter }: LogoProps) => (
  <a
    href="#"
    className={classNames(cls.logo, { [cls.logoFooter]: logoFooter }, [
      className
    ])}
    aria-label="Link para a página inicial"
  >
    <svg className={cls.image}>
      <use href={`${LogoImage}#logo`}></use>
    </svg>
  </a>
)
