interface IHeader {
  label: string
  url: string
}

interface IFooter {
  label: string
  items: string
}

export interface IMenu {
  logo: string
  header: IHeader[]
  footer: IFooter[]
}
