interface ISubmenuItems {
  label: string
  url: string
}

export interface ISubmenuData {
  label: string
  items: ISubmenuItems[]
}

export const submenuData: ISubmenuData[] = [
  {
    label: 'CURSOS',
    items: [
      {
        label: 'Diseño',
        url: '#'
      },
      {
        label: 'Programación & Data',
        url: '#'
      },
      {
        label: 'Gaming',
        url: '#'
      },
      {
        label: 'Marketing',
        url: '#'
      },
      {
        label: 'Software',
        url: '#'
      }
    ]
  },
  {
    label: 'WEBINARS',
    items: [
      {
        label: 'Próximamente',
        url: '#'
      },
      { label: 'Anteriores', url: '#' }
    ]
  },
  {
    label: 'SOBRE',
    items: [
      {
        label: 'Sobre nostros',
        url: '#'
      },
      { label: 'Centro de carreras', url: '#' },
      { label: 'Vacantes', url: '#' }
    ]
  },
  {
    label: 'BLOG',
    items: [
      {
        label: 'Diseño',
        url: '#'
      },
      {
        label: 'Programación & Data',
        url: '#'
      },
      {
        label: 'Gaming',
        url: '#'
      },
      {
        label: 'Marketing',
        url: '#'
      },
      {
        label: 'Software',
        url: '#'
      }
    ]
  }
]
