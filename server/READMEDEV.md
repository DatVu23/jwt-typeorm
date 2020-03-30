# GWT Typeorm Sequelize demo

## Generate typeorm

npm i -g typeorm
typeorm init --name server --database postgres

## Generate tsconfig

npx tsconfig.json

## Upgrade dependencies using yarn

yarn
yarn upgrade-interactive --latest

yarn add express apollo-server-express graphql type-graphql

yarn add -D @types/express @types/graphql

yarn add bcrypt jsonwebtoken cookie-parser dotenv pg

## Set up database

MySQL

docker run \
 -p 0.0.0.0:7998:3306 \
 --name jwt-typeorm \
 -e MYSQL_ROOT_PASSWORD=password \
 -e MYSQL_USER=upl-dev \
 -e MYSQL_PASSWORD=password \
 -e MYSQL_DATABASE=upl \
 -d mysql:latest
`

Postgres

`sh docker run \ -p 0.0.0.0:6996:5432 \ --name jwt-typeorm \ -e POSTGRES_USER=dev \ -e POSTGRES_PASSWORD=postgres \ -e POSTGRES_DB=jwt-typeorm \ -d postgres`
