import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import EbacLinkImage from 'shared/assets/img/ebac-link.svg'
import cls from './EbacLink.module.css'

interface EbacLinkProps {
  className?: string
}

export const EbacLink: FC<EbacLinkProps> = ({ className }) => (
  <a
    href="#"
    className={classNames(cls.ebaclink, {}, [className])}
    aria-label="Link para a página inicial"
  >
    <span className={cls.linkText}>EBAC</span>
    <svg className={cls.linkImage}>
      <use href={`${EbacLinkImage}#image`}></use>
    </svg>
  </a>
)
