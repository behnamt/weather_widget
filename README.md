# Weather Widget

## General Setup
### Install dependencies
`yarn install`

## Test

## App
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `yarn test`

Launches the test runner in the interactive watch mode.\
## Scripts
### Lint
`yarn lint`
### Prettier
`yarn format`

## Decisions
1. No CSS framework(e.g. tailwindcss) is required. can be done with simple css
1. No global storage (e.g. redux) is required. I will use a context to fetch data and store it globaly
1. fix CORS temporarly with `cors-anywhere.herokuapp.com`
1. separate react components based on atomic concept 
1. since the data from api is from 2017, I used a random index of data to mock current hour
1. used img-svg for now
1. import svg directly
1. import all styles in styles/index.scss so I can use mixins and variables
1. turned off jsx-a11y/click-events-have-key-events and jsx-a11y/interactive-supports-focus rules in eslint: no time