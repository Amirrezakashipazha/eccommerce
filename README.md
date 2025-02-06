This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, make an copy from .env.example and named it .env
base on what enviroment you want to run change the ENVIRONMENT in .env

Then There are Three way to run the project

# if you have Docker and Make installed on your system
```bash
make build
```
# if you have just Docker installed on your system
```bash
docker compose --profile production up -d --build --remove-orphans
# or
docker compose --profile local up -d --build --remove-orphans
```
# if you don't have neighter of them installed on your system
(You need to have node-20 installed on your system)

# then
```bash
npm i
# or
pnpm i
# or
yarn i
```

# then
```bash
npm run build
# or
pnpm build
# or
yarn build
```

# then
```bash
npm run start
# or
pnpm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.