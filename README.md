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