# Express.js with Babel Boilerplate

### Features:
- [Express.js](https://expressjs.com/) as the web framework.
- ES2017+ support with [Babel](https://babeljs.io/).
- Automatic polyfill requires based on environment with [babel-preset-env](https://github.com/babel/babel-preset-env).
- Linting with [ESLint](http://eslint.org/) 
- Formating with [Prettier](https://prettier.io/) code formatter.
- Testing with [Jest](https://facebook.github.io/jest/).

## Getting started

```sh
# Clone the project
git clone git@github.com:mjurincic/express-ES2018.git
cd express-ES2018

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# or if you're using Yarn
yarn
```
Then you can begin development:

```sh
# npm
npm run dev

# yarn
yarn run dev

```

This will launch a [nodemon](https://nodemon.io/) process for automatic server restarts when your code changes.

### Testing

Testing is powered by [Jest](https://facebook.github.io/jest/).

```sh
# yarn
yarn test

# npm
npm test
```

You can also generate coverage with:

```sh
# npm
npm test -- --coverage

# yarn
yarn test --coverage
```

### Linting

Linting is set up using [ESLint](http://eslint.org/). 
It uses ESLint's default [eslint:recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) rules. Feel free to use your own rules and/or extend another popular linting config (e.g. [airbnb's](https://www.npmjs.com/package/eslint-config-airbnb) or [standard](https://github.com/feross/eslint-config-standard)).

Begin linting in watch mode with:

```sh
# npm
npm run lint

# yarn
yarn run lint

```

To begin linting and start the server simultaneously, edit the `package.json` like this:

```
"dev": "nodemon src/index.js --exec \"node -r babel-register\" | npm run lint"
```

### Environmental variables in development

The project uses [dotenv](https://www.npmjs.com/package/dotenv) for setting environmental variables during development. Simply copy `.env.example`, rename it to `.env` and add your env vars as you see fit. 

It is **strongly** recommended **never** to check in your .env file to version control. It should only include environment-specific values such as database passwords or API keys used in development. Your production env variables should be different and be set differently depending on your hosting solution. `dotenv` is only for development.

### Deployment

Deployment is specific to hosting platform/provider but generally:

```sh
# yarn
yarn run build

# npm
npm run build
```

will compile your `src` into `/build`, and 

```sh
# yarn
yarn start

# npm
npm start
```

will run `build` (via the `prestart` hook) and start the compiled application from the `/build` folder.
