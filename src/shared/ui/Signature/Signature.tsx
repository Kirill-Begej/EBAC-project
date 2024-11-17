import { classNames } from 'shared/lib/classNames/classNames'
import { UseContactsContext } from 'app/providers/StoreProvider'
import cls from './Signature.module.css'

interface SignatureProps {
  className?: string
}

export const Signature = ({ className }: SignatureProps) => {
  const { links } = UseContactsContext()

  return (
    <ul className={classNames(cls.signature, {}, [className])}>
      {links &&
        links.map((item, i) => (
          <li className={cls.item} key={i}>
            <a href={item.url} className={cls.link}>
              {item.label}
            </a>
          </li>
        ))}
    </ul>
  )
}
