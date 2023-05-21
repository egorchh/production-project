## Запуск проекта

```
npm install - устанавливаем зависимости
```
```
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```

----

## Скрипты
- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:apply` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека ```i18next``` для работы с переводами.
Файлы с переводами хранятся в директории ```public/locales```.

Для комфортной работы рекомендую установить плагин для ```webstorm/vscode```

Документация ```i18next``` - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на ```jest``` - `npm run test:unit`
2) Тесты на компоненты с ```React testing library``` -`npm run test:unit`
3) Скриншотное тестирование с ```loki``` `npm run test:ui`
4) e2e тестирование с ```Cypress``` `npm run test:e2e`

Подробнее о тестах - [документация тестирование](./docs/tests.md)

----

## Линтинг

В проекте используется ```eslint``` для проверки typescript кода и ```stylelint``` для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin ```eslint-plugin-feature-sliced-design-validator```,
который содержит 3 правила:
1) ```path-checker``` - запрещает использовать абсолютные импорты в рамках одного модуля
2) ```layer-imports``` - проверяет корректность использования слоев с точки зрения FSD
   (например слой widgets нельзя использовать в слои features и entities)
3) ```public-api-imports``` - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте практически для каждого компонента описываются стори-кейсы (их список расширяется).
Запросы на сервер мокаются с помощью ```storybook-addon-mock```.

Файл со сторикейсами создает рядом с компонентом с расширением *.stories.tsx*.

Запустить сторибук можно командой:
- `npm run storybook`

Собрать билд сторибука:
- `npm run storybook:build`

Подробнее о [Storybook](./docs/storybook.md)


----

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. ```webpack``` - *./config/build*
2. ```vite``` - *vite.config.ts*

Оба сборщика адаптированы под основные фичи приложения. Использовать 
два и более сборщика на проекте не рекомендуется,
это было сделано только в учебных целях, целях расширения кругозора

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности, переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----


## Сущности (entities)

- [Article](./src/entities/Article/README.md)
- [Comment](./src/entities/Comment/README.md)
- [Country](./src/entities/Country/README.md)
- [Currency](./src/entities/Currency/README.md)
- [Notification](./src/entities/Notification/README.md)
- [Profile](./src/entities/Profile/README.md)
- [Rating](./src/entities/Rating/README.md)
- [User](./src/entities/User/README.md)

## Фичи (features)

- [addComment](./src/features/addComment)
- [articleRating](./src/features/articleRating)
- [articleRecommendationsList](./src/features/articleRecommendationsList)
- [AuthByUsername](./src/features/AuthByUsername)
- [avatarDropdown](./src/features/avatarDropdown)
- [EditableProfileCard](./src/features/EditableProfileCard)
- [LangSwitcher](./src/features/LangSwitcher)
- [ThemeSwitcher](./src/features/ThemeSwitcher)
- [notificationButton](./src/features/notificationButton)
- [profileRating](./src/features/profileRating)
- [scrollRestoration](./src/features/scrollRestoration)
- [selectArticleView](./src/features/selectArticleView)

*P.S. Проект и документация находится в разработке*
