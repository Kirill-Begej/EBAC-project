interface IContactsData {
  title: string
  href: string
  linkText: string
  ariaLabel: string
}

export const contactsData: IContactsData[] = [
  {
    title: 'WhatsApp',
    href: 'https://wa.me/525592252629',
    linkText: '+52 55 9225-2629',
    ariaLabel: 'Link para nosso WhatsApp'
  },
  {
    title: 'Telefone',
    href: 'tel:+525592252629',
    linkText: '+52 55 9225-2629',
    ariaLabel: 'Link para nosso telefone'
  },
  {
    title: 'email',
    href: 'mailto:ebac.mx@gmail.com',
    linkText: 'Ebac.mx@gmail.com',
    ariaLabel: 'Link para nosso e-mail'
  }
]
