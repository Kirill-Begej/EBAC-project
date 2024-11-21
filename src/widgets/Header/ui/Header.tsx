import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import {
  AppLink,
  AppLinkImageType,
  AppLinkType
} from 'shared/ui/AppLink/AppLink'
import LogoImage from 'shared/assets/img/logo.png'
import cls from './Header.module.css'

interface HeaderProps {
  className?: string
}

export const Header = ({ className }: HeaderProps) => (
  <header className={classNames(cls.header, {}, [className])}>
    <div className={cls.container}>
      <div className={classNames(cls.column, {}, [cls.left])}>
        <nav className={cls.nav}>
          <menu className={cls.menu}>
            <li className={cls.item}>
              <AppLink
                to={RoutePath.main}
                type={AppLinkType.LINK}
                imageType={AppLinkImageType.PLAY}
              >
                Играть
              </AppLink>
            </li>
            <li className={cls.item}>
              <AppLink
                to={RoutePath.result}
                type={AppLinkType.LINK}
                imageType={AppLinkImageType.RESULT}
              >
                Результаты
              </AppLink>
            </li>
          </menu>
        </nav>
      </div>
      <div className={classNames(cls.column, {}, [cls.center])}>
        <AppLink
          to={RoutePath.main}
          type={AppLinkType.LOGO}
          imageType={AppLinkImageType.NO}
        >
          <img
            src={LogoImage}
            alt="Логитип сайта игры Memory Game."
            style={{ display: 'block' }}
          />
        </AppLink>
      </div>
      <div className={classNames(cls.column, {}, [cls.right])}>
        <AppLink
          to={RoutePath.settings}
          type={AppLinkType.LINK}
          imageType={AppLinkImageType.SETTING}
        >
          Настройки
        </AppLink>
      </div>
    </div>
  </header>
)
