<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Voting Api

<b>Sqlite3</b> is used to store data, but you can use other databases.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints
```bash
/auth/login - login:admin password:admin

/votes/ - to get votes

/votes/create - to create vote

```

## Variable environment
```bash
JWT_SECRET=secret - jwt secret key

JWT_ACCESS_EXPIRESIN=15m - lifetime of the access key

JWT_REFRESH_EXPIRESIN=1h - lifetime of the refresh key
```