import { FC } from 'react'
import { Link, LinkProps, NavLink } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import PlayImage from 'shared/assets/img/play.svg'
import ResultImage from 'shared/assets/img/result.svg'
import SettingImage from 'shared/assets/img/setting.svg'
import cls from './AppLink.module.css'

export enum AppLinkType {
  LOGO = 'logo',
  LINK = 'link'
}

export enum AppLinkImageType {
  PLAY = 'play',
  RESULT = 'result',
  SETTING = 'setting',
  NO = 'no'
}

interface AppLinkProps extends LinkProps {
  className?: string
  type: AppLinkType
  imageType: AppLinkImageType
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  children,
  type,
  imageType
}) => (
  <>
    {type === AppLinkType.LOGO && (
      <Link to={to} className={classNames(cls.applink, {}, [className])}>
        {children}
      </Link>
    )}
    {type === AppLinkType.LINK && (
      <NavLink
        to={to}
        className={({ isActive }) =>
          classNames(
            cls.applink,
            {
              [cls.active]: isActive
            },
            [className]
          )
        }
      >
        <div className={cls.container}>
          <span className={cls.image}>
            {imageType === AppLinkImageType.PLAY && (
              <PlayImage className={cls.pic} />
            )}
            {imageType === AppLinkImageType.RESULT && (
              <ResultImage className={cls.pic} />
            )}
            {imageType === AppLinkImageType.SETTING && (
              <SettingImage className={cls.pic} />
            )}
          </span>
          <span className={cls.text}>{children}</span>
        </div>
      </NavLink>
    )}
  </>
)
