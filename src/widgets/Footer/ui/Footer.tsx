import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Logo } from 'shared/ui/Logo/Logo'
import FooterLogo1xJpg from 'shared/assets/img/footer/footer-logo-image@1x.jpg'
import FooterLogo2xJpg from 'shared/assets/img/footer/footer-logo-image@2x.jpg'
import FooterLogo1xWebp from 'shared/assets/img/footer/footer-logo-image@1x.webp'
import FooterLogo2xWebp from 'shared/assets/img/footer/footer-logo-image@2x.webp'
import { Social } from 'shared/ui/Social/Social'
import { Form } from 'features/Form'
import { Submenu, SubmenuType } from 'shared/ui/Submenu/Submenu'
import { Contacts } from 'shared/ui/Contacts/Contacts'
import cls from './Footer.module.css'

interface FooterProps {
  className?: string
}

export const Footer: FC<FooterProps> = ({ className }) => (
  <div className={classNames(cls.footer, {}, [className])}>
    <div className={cls.container}>
      <div className={cls.logo}>
        <div className={cls.logoRow}>
          <Logo logoFooter={true} />
          <div className={cls.logoImageWrap}>
            <img
              src={FooterLogo1xJpg}
              srcSet={`
                ${FooterLogo2xJpg} 2x,
                ${FooterLogo1xWebp} 1x,
                ${FooterLogo2xWebp} 2x,
              `}
              alt="Membro da lista EdTech 100 da América Latina."
              className={cls.logoImage}
            />
          </div>
        </div>
        <div className={cls.socialRow}>
          <Social />
        </div>
      </div>
      <Form className={cls.form} formType="footer" />
      <div className={cls.menu}>
        <Submenu type={SubmenuType.CURSOS} />
        <Submenu type={SubmenuType.WEBINARS} />
        <Submenu type={SubmenuType.SOBRE} />
        <Submenu type={SubmenuType.BLOG} />
      </div>
      <Contacts className={cls.contacts} />
    </div>
  </div>
)
