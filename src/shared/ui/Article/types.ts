export interface IMainItems {
  accent: string
  date: string
  'browse-text': string
  duration: number
  size: string
  text: string
  title: string
  img: {
    shape: string
    url: string
  }
  stamp: {
    position: string
    type: string
    word: string
  }
  tags: string[]
}

export interface IMain {
  ticker: {
    color: string
    text: string
  }
  items: IMainItems[]
}
