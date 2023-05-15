# Social Network API

## Description

An API designed for use in a social networking app. Built with NodeJS, ExpressJS, and mongodb.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

Requirements:

- Node v18.x
- MongoDB

Instructions:

- clone this repo.
- cd into project directory
- npm install
- update the connection information in the `config/connection.js` file.
- `npm run start`

Seed Data:

- `npm run seed`

## Usage

Once the app is running the following endpoints will be available for use.

_/api/users_

GET all users

GET a single user by its \_id and populated thought and friend data

POST a new user:

PUT to update a user by its \_id

DELETE to remove user by its \_id

_/api/users/:userId/friends/:friendId_

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list

_/api/thoughts_

GET to get all thoughts

GET to get a single thought by its \_id

POST to create a new thought (don't forget to push the created thought's \_id to the associated user's thoughts array field)

PUT to update a thought by its \_id

DELETE to remove a thought by its \_id

## License

MIT License Copyright (c) 2023 Lorne Cyr

## Badges

![Boot Camp Project](https://img.shields.io/badge/Boot%20Camp%20Project-%E2%9C%94%EF%B8%8F-green)
