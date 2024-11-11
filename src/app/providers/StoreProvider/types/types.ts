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

interface ILinksContacts {
  label: string
  url: string
}

interface IContacts {
  whatsapp: string
  phone: string
  email: string
  instagram: string
  facebook: string
  youtube: string
  linkedin: string
  subscription: {
    'email-placeholder': string
    'submit-text': string
  }
  links: ILinksContacts[]
}

interface IContentItems {
  accent: string
  date: string
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

interface IMainItems extends IContentItems {
  'browse-text': string
}

interface IProposalsItems {
  author: {
    img: string
    name: string
    position: string
  }
  background: string
  date_from: string
  date_to: string
  tags: string[]
  text: string
  time: string
}

interface ISections {
  content: {
    ticker: {
      color: string
      text: string
    }
    items: IContentItems[]
  }
  main: {
    ticker: {
      color: string
      text: string
    }
    items: IMainItems[]
  }
  proposals: {
    'browse-all-text': string
    title: string
    ticker: {
      color: string
      text: string
    }
    items: IProposalsItems[]
  }
  subscription: {
    'agreement-text': string
    'email-placeholder': string
    'submit-text': string
    text: string
    ticker: {
      color: string
      text: string
    }
    title: string
  }
}

export interface IStore {
  isLoading: boolean
  menu: IMenu | {}
  contacts: IContacts | {}
  sections: ISections | {}
}
