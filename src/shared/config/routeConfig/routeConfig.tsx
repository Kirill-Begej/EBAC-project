import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { ResultPage } from 'pages/ResultPage'
import { SettingsPage } from 'pages/SettingsPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
  MAIN = 'main',
  RESULT = 'result',
  SETTINGS = 'settings',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.RESULT]: '/result',
  [AppRoutes.SETTINGS]: '/settings',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.RESULT]: {
    path: RoutePath.result,
    element: <ResultPage />
  },
  [AppRoutes.SETTINGS]: {
    path: RoutePath.settings,
    element: <SettingsPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
