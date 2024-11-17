___
# Одностраничный лендинг "EBAC"

## Содержание
- [Описание проекта](#описание-проекта)
- [Время выполнения проекта](#время-выполнения-проекта)
- [Статус проекта](#статус-проекта)
- [Ссылки на материалы задания](#ссылки-на-материалы-задания)
- [Стек используемых технологий](#стек-используемых-технологий)
- [Установка проекта](#установка-проекта)
- [Запуск проекта](#запуск-проекта)
- [Запуск локального сервера](#запуск-локального-сервера)
- [Проверка линтинга](#проверка-линтинга)
- [Инициализация Husky](#инициализация-husky)
___

## Описание проекта
Репозиторий одностраничного лендинга "EBAC". Данный ленгинг реализовывался в рамках задания №3 стажировки компании DIGITAL SECTOR. В данном лендинге присутствуют анимации, css-маски, реализована адаптивность сайта, "липкий" хедер, валидация секций subscribe и footer. Для сборки проекта используется Webpack. Проект выполнен с помощью React, для организации структуры проекта была выбрана архитектура Feature-Sliced Design. Полечение содержимого страницы происходит с помощью API-запросов, для этого развернут локальный API-сервер.
___

## Время выполнения проекта
Проект начат: 07.11.2024.\
Проект закончен: 17.11.2024.
___

## Статус проекта
Проект выполнен.
___

## Ссылки на материалы задания
- [Описание задания](https://github.com/digitalSector47/traineeship-tasks/blob/master/task-3/description.md)
- [Дизайн макет](https://www.figma.com/design/mu3xyHH7jl5xGsAB6C0eDa/DS%2F%D1%81%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%2F1?node-id=0-1&t=pO8T3EvVcBMVUoT6-1)
- [db.json](https://github.com/digitalSector47/traineeship-tasks/blob/master/task-3/db.json)
___

## Стек используемых технологий
- [HTML5](https://dev.w3.org/html5/spec-LC/)
- [CSS3](https://www.w3.org/Style/CSS/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [Feature-Sliced Design](https://feature-sliced.design/ru/docs)
___

## Установка проекта
Клонируйте проект при помощи HTTPS:
```sh
$ git clone https://github.com/Kirill-Begej/todo-list-project.git
```

Клонируйте проект при помощи SSH:
```sh
$ git clone git@github.com:Kirill-Begej/todo-list-project.git
```

Для установки зависимостей, выполните команду:
```sh
$ npm i
```
___

## Запуск проекта
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm run start
```

Чтобы выполнить development сборку, выполните команду: 
```sh
npm run build:dev
```

Чтобы выполнить production сборку, выполните команду: 
```sh
npm run build:prod
```
___

## Запуск локального сервера
Чтобы запустить локальный JSON-сервер, выполните команду:
```sh
npm run start:dev:server
```
___

## Проверка линтинга
Для проверки TypeScript-файлов используется ESLint с конфигурацией airbnb-base.

Чтобы проверить ts-файлы, выполните команду:
```sh
npm run lint:ts
```

Чтобы проверить ts-файлы и исправить их, выполните команду:
```sh
npm run lint:ts:fix
```
Для проверки css-файлов используется StyleLint.

Чтобы проверить css-файлы, выполните команду:
```sh
npm run lint:css
```

Чтобы проверить css-файлы и исправить их, выполните команду:
```sh
npm run lint:ts:css
```
___
## Инициализация Husky
Для инициализации Husky, выполните команду:
```sh
npm run prepare
```
___
## Запуск Pre-commit
Для запуска Pre-commit, выполните команду:
```sh
npm run pre-commit
```