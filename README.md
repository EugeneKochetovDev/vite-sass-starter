# Vite + Sass Starter (Yarn) + Layouts/Partials

Стартовый репозиторий для верстки на **Vite + Sass (SCSS)** с нормальными **layouts/partials** без JS-костылей: `extends / include` работают на этапе сборки через **Vituum + PostHTML**.

## Что внутри

- **Vite** — быстрый dev-сервер и сборка
- **Sass (SCSS)** — стили, переменные, миксины
- **PostCSS + Autoprefixer** — автопрефиксы
- **Vituum + PostHTML** — многостраничка + `extends/include` (layout’ы и компоненты)
- **stylelint** — проверка SCSS
- **prettier** — форматирование

## Быстрый старт

### Установка
```bash
yarn
````

### Разработка

```bash
yarn dev
```

### Сборка

```bash
yarn build
```

### Превью сборки

```bash
yarn preview
```

## Команды

* `yarn dev` — dev-сервер
* `yarn build` — сборка в `dist/`
* `yarn preview` — превью `dist/`
* `yarn lint:css` — проверка SCSS (stylelint)
* `yarn format` — форматирование проекта (prettier)

## Структура проекта

```text
public/                  # статические файлы без обработки (копируются как есть)
src/
  pages/                 # страницы (входные HTML)
    index.html
  layouts/               # layout’ы
    base.html
  components/            # переиспользуемые части (header/footer/...)
    header.html
    footer.html
  js/
    main.js              # подключает стили и JS
  styles/
    main.scss
    _variables.scss
    _mixins.scss
  assets/
    images/
    fonts/
dist/                    # результат сборки
```

## Как работают header/footer и layout

Используем PostHTML-теги:

* `<extends src="...">` — наследование layout’а
* `<block name="...">` — блок контента
* `<include src="...">` — вставка компонента

## Стили

`src/js/main.js` подключает SCSS:

```js
import "../styles/main.scss";
```

Основной файл: `src/styles/main.scss`
partials: `_variables.scss`, `_mixins.scss` подключаются через `@use`.

## PostCSS

`postcss.config.cjs` включает Autoprefixer — он добавляет нужные префиксы автоматически.
