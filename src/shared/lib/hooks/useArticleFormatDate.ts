export const useArticleFormatDate = (date: string) => {
  const months = [
    'de enero de',
    'de febrero de',
    'de marzo de',
    'de abril de',
    'de mayo de',
    'de junio de',
    'de julio de',
    'de agosto de',
    'de septiembre de',
    'de octubre de',
    'de noviembre de',
    'de diciembre de'
  ]

  const spliteDate = date.split('.')

  return {
    date: `${Number(spliteDate[0])} ${months[Number(spliteDate[1]) - 1]} ${spliteDate[2]}`
  }
}
