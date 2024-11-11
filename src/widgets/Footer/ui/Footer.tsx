/* eslint-disable arrow-body-style */
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Logo } from 'shared/ui/Logo/Logo'
import FooterLogo1xJpg from 'shared/assets/img/footer/footer-logo-image@1x.jpg'
import FooterLogo2xJpg from 'shared/assets/img/footer/footer-logo-image@2x.jpg'
import FooterLogo1xWebp from 'shared/assets/img/footer/footer-logo-image@1x.webp'
import FooterLogo2xWebp from 'shared/assets/img/footer/footer-logo-image@2x.webp'
import { Social } from 'shared/ui/Social/Social'
import { Form } from 'features/Form'
// import { Submenu } from 'shared/ui/Submenu/Submenu'
import { Contacts } from 'shared/ui/Contacts/Contacts'
// import { UseMenuContext } from 'app/providers/StoreProvider'
import cls from './Footer.module.css'
import { signatureData } from '../model/footerData'

interface FooterProps {
  className?: string
}

const Footer: FC<FooterProps> = ({ className }) => {
  // const menu = UseMenuContext()

  return (
    <footer className={classNames(cls.footer, {}, [className])}>
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
          {/* {menu?.footer &&
            menu.footer.map((item, i) => <Submenu data={item} key={i} />)} */}
        </div>
        <Contacts className={cls.contacts} />
        <Social className={cls.social} />
        <ul className={cls.signature}>
          {signatureData.map((item, i) => (
            <li className={cls.item} key={i}>
              <p className={cls.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
