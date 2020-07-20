# Binge-app
This web-app dispays some of the most popular Tv-shows using the open api: https://www.tvmaze.com/api.php to get data from the server.
The shows are arranged based on different genres and are displayed on the Home Page. There is a search functionality which enables
the user to search for some specific show. The user can get detailed information about show on clicking on it. The details
displayed are stated below:
• Overview : name, poster, language, genres, rating and summary of the show
• Episodes, Cast and Crew details

## Installations
## Vue CLI
```
Vue Js is a progressive framework with a small size of around ~21kb , easy to understand and scale large 
application. For more informatyion refer the following pages.

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a 
Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
``` 

### Project dependencies and devDependencies ------------
1. axios:
   It is a Promise which is based on HTTP client for the browser.
   Installation command:
   npm install axios
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. vuetify:
   Vuetify is a Vue UI Library with beautifully handcrafted Material Components. we can build responsive, 
   mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular 
   front-end CSS library — Material Design Component Framework. Release cadence : Weekly
   Please refer below url for more details:
   https://vuetifyjs.com/en/getting-started/quick-start

3. @vue/cli-plugin-unit-jest:
   Jest as a JS unit testing framework which is used to run unit test.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, 
   coverageThreshold,etc for getting exact code coverage with reports.

4. Store persistance: it enables the store to survive through page refresh.
   Installation command:
   npm install --save vuex-persistedstate
    