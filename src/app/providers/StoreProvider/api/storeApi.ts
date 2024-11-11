const API_URL = 'http://localhost:3000'

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json()
  }

  return Promise.reject(new Error(`Ошибка ${res.status}`))
}

const request = (endpoint: string, options?: RequestInit) =>
  fetch(`${API_URL}${endpoint}`, options).then(checkResponse)

export const getMenuRequest = async () => request('/menu')

export const getContactsRequest = async () => request('/contacts')

export const getSectionsRequest = async () => request('/sections')
