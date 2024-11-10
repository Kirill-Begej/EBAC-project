interface IHeader {
  label: string
  url: string
}

interface IFooter {
  label: string
  items: IItems[]
}

interface IItems {
  label: string
  url: string
}

export interface IMenu {
  logo: string
  header: IHeader[]
  footer: IFooter[]
}
