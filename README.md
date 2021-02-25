# Webpack and TypeScript

## Installation

- Install [Node.js](https://nodejs.org/en/download/)
- Install [Git](https://git-scm.com/downloads)
- Install [Yarn](https://yarnpkg.com/getting-started/install)
- Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Open a Terminal and type:\
  `git clone https://github.com/rainerbez/webpack-typescript`
- Proceed into the downloaded repository: \
  `cd webpack-typescript`
- Install all the necessary node modules:\
  `yarn install`

## Edit the source files

- `public/index.html`
- `src/index.ts`

## Compile and bundle with WebPack

- To build with Webpack (development):\
  `yarn webpack:start`\
  and open browser at: [http://localhost/8080](http://localhost/8080)

- To build with Webpack (production):\
  `yarn webpack:build`\

- To view run lite-server using:\
  `yarn webpack:view`
