# Hack the 6ix 2024 Landing page

## Getting started

1. Install Nodejs 20 (I suggest using [nvm](https://github.com/nvm-sh/nvm) and also setting up [autoloading .nvmrc](https://github.com/nvm-sh/nvm) to ensure proper version is used)
2. `cp .env.example .env.local` to make local copy of environment variables (Fill in any missing values from whatever secret manager)
3. `npm ci` to install the goods
4. `npm run dev` to start the goods
5. Profit

## Commands

Prefix all the commands below with `npm run` to use them

| Commands      | Description                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `dev`         | Starts development server                                                            |
| `build`       | Builds site for production                                                           |
| `build:pages` | For building on Cloudflare Pages                                                     |
| `preview`     | For building and running production locally like Cloudfare Pages to debug prod stuff |
| `start`       | For starting production server for the lambdas, SSGs, SSRs, SSDs, and the ABCs       |
| `lint`        | For fixing your bad code                                                             |

## Deployment

Automatically with Cloudflare Pages stalking our main branch 👀
