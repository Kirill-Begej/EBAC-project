import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface SettingsPageProps {
  className?: string
}

const SettingsPage: FC<SettingsPageProps> = ({ className }) => (
  <div className={classNames('', {}, [className])}>Settings Page</div>
)

export default SettingsPage
