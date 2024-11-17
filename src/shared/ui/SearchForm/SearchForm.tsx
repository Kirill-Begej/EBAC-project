import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import FormImage from 'shared/assets/img/search-form.svg'
import cls from './SearchForm.module.css'

interface SearchFormProps {
  className?: string
}

export const SearchForm: FC<SearchFormProps> = ({ className }) => (
  <form className={classNames(cls.searchform, {}, [className])}>
    <button className={cls.button} aria-label="Botão de pesquisa no site">
      <svg className={cls.image}>
        <use href={`${FormImage}#image`}></use>
      </svg>
    </button>
  </form>
)
