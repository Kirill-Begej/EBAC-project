export const useWebinarFormatDate = (dateFrom: string, dateTo: string) => {
  const months = [
    'de enero',
    'de febrero',
    'de marzo',
    'de abril',
    'de mayo',
    'de junio',
    'de julio',
    'de agosto',
    'de septiembre',
    'de octubre',
    'de noviembre',
    'de diciembre'
  ]

  const spliteDateFrom = dateFrom.split('.')
  const spliteDateTo = dateTo.split('.')

  return {
    date: `${Number(spliteDateFrom[0])} ${months[Number(spliteDateFrom[1]) - 1]}, ${Number(spliteDateTo[0])} ${months[Number(spliteDateTo[1]) - 1]} ${spliteDateTo[2]}`
  }
}
