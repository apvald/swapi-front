# Star Wars Test Front

Este es un ejemplo de una Aplicación Web en React haciendo uso del [server de GraphQL de SWAPI](https://github.com/apvald/swapi-gql-back)

## Instalar dependencias

```bash
yarn install
```
```bash
npm install
```

## Iniciar Servidor en local (localhost:5173)

```bash
yarn dev
```
```bash
npm run dev
```

## Iniciar los tests

```bash
yarn test
```
```bash
npm run test
```

## Generar archivos para producción

```bash
yarn build
```
```bash
npm run build
```

# Conexión al servidor graphql

Por defecto usa la ruta de producción del [servidor gql para swapi](https://github.com/apvald/swapi-gql-back)

```ts
uri: 'https://swapi-gql-back.vercel.app'
```

Puede clonar el servidor y usarlo en local configurando el campo `uri` del cliente de Apollo, en el archivo `'src/main.tsx'`, por `'http://localhost:4000/'`

```ts
const client = new ApolloClient({
  uri: 'https://swapi-gql-back.vercel.app', // 'http://localhost:4000/'
  ...
});
```

# Estructura de directorios

## Estructura principal

    .
    ├── __mocks__               # Archivos mocks para tests
    ├── dist                    # Archivos compilados para producción
    ├── src                     # Archivos sources o código fuente
    ├── tests                   # Tests
    ├── index.html              # html principal
    └── README.md

## Estructura Source files o código fuente

    .
    ├── ...
    ├── src                   # Archivos de código fuente
    │   ├── assets            # Archivos SVG
    │   ├── components        # Componentes React
    │   ├── graphql           # Queries graphql
    │   ├── App.css           # CSS para App.tsx
    │   ├── App.tsx           # App Component
    │   ├── index.css         # CSS para main.tsx
    │   └── main.tsx          # Componente Principal
    └── ...

### Estrutura de componentes
> Cada componente está conformado por un archivo `index.tsx` y de ser necesario `style.css`

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── components                    # Componentes React
    │   │   ├── atoms                     
    │   │   │   ├── chevronRightIcon      # Componente
    │   │   │   ├── leftArrowIcon         # Componente
    │   │   │   ├── LoaderIcon            # Componente
    │   │   │   ├── paragraph             # Componente
    │   │   │   └── subtitle              # Componente
    │   │   ├── molecules
    │   │   │   ├── dataCell              # Componente
    │   │   │   ├── loaderIcon            # Componente
    │   │   │   ├── navbar                # Componente
    │   │   │   ├── noticeCell            # Componente
    │   │   │   ├── personCell            # Componente
    │   │   │   └── sectionHeader         # Componente
    │   │   ├── organisms
    │   │   │   ├── information           # Componente
    │   │   │   └── sidebar               # Componente
    │   │   ├── pages
    │   │   │   └── swPage                # Componente
    │   │   └── templates
    │   │       └── swTemplate            # Componente
    │   └── ...
    └── ...

### Estrutura de tests

> La estrutura del directorio `tests` replica el formato de `src` y sus componentes, donde cada componente es reemplazado por un archivo `*.test.tsx`