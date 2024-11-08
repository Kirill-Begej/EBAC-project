import SocialLink from 'shared/assets/img/social-link-icon.svg'

interface ISocialData {
  href: string
  ariaLabel: string
  image: string
}

export const socialData: ISocialData[] = [
  {
    href: 'https://www.instagram.com/',
    ariaLabel: 'Link para nosso Instagram',
    image: `${SocialLink}#instagram`
  },
  {
    href: 'https://facebook.com/',
    ariaLabel: 'Link para nosso Facebook',
    image: `${SocialLink}#facebook`
  },
  {
    href: 'https://www.youtube.com/',
    ariaLabel: 'Link para nosso Youtube',
    image: `${SocialLink}#youtube`
  },
  {
    href: 'https://linkedin.com/',
    ariaLabel: 'Link para nosso LinkedIn',
    image: `${SocialLink}#linkedin`
  }
]
