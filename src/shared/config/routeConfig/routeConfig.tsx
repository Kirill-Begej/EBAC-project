import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { ResultPage } from 'pages/ResultPage'
import { SettingsPage } from 'pages/SettingsPage'

export enum AppRoutes {
  MAIN = 'main',
  RESULT = 'result',
  SETTINGS = 'settings'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.RESULT]: '/result',
  [AppRoutes.SETTINGS]: '/settings'
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
  }
}
