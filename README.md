# Create UXsician App boilerplate

based on (Medium)[https://www.freecodecamp.org/news/a-complete-react-boilerplate-tutorial-from-zero-to-hero-20023e086c4a/]

## Initial config

⚛ React — 16.11.0
♻ Redux with Redux Thunk — State Management with middleware to handle async requests
🛠 Babel — ES6 syntax, Airbnb & React/Recommended config
🚀 Webpack — Hot Reloading, Code Splitting, Optimized Build
💅 CSS — Styled Components
✅ Tests — Jest, React Testing Library
💖 Lint — ESlint

```
npm init -y

npm install --save-dev webpack webpack-cli webpack-dev-server webpack-merge html-webpack-plugin clean-webpack-plugin img-loader url-loader file-loader

npm install --save-dev @babel/core @babel/cli @babel/node @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/plugin-syntax-dynamic-import @babel/plugin-syntax-import-meta @babel/plugin-transform-async-to-generator @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react @babel/register @babel/runtime babel-eslint babel-jest babel-loader babel-core@7.0.0-bridge.0

npm install --save-dev eslint eslint-config-airbnb eslint-config-prettier eslint-loader eslint-plugin-babel eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react

npm install --save-dev prettier

npm install --save react react-dom cross-env

npm install --save redux react-redux redux-thunk

npm install --save react-router-dom

npm install --save styled-components

npm install --save-dev jest jest-dom react-testing-library

//new ones

npm i -D webpack-jarvis

npm i redux-logger

npm install copy-webpack-plugin --save-dev
```

## Double Check

-   Check if Syled Components Architecture is OK

## Pending

-   Proptypes
-   SEO
-   Lazyload
-   Form + validations
-   Authentication
-   Internazionalization

## Future Architectures

-   PWA
-   SSR
-   ISOMORPHIC
-   React Native
