# Social Network API

## Description

An API designed for use in a social networking app. Built with NodeJS, ExpressJS, and mongodb.


https://github.com/Llourn/social-network-api/assets/4216705/f0bc3663-0c84-45dc-9dde-efad90d4d16f


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
- `npm run start` to start the server.

Seed Data:

- `npm run seed` to seed the database with test data.

## Usage

Once the app is running the following endpoints will be available for use.

_/api/users_

- GET all users

- GET a single user by its \_id and populated thought and friend data

- POST a new user:

- PUT to update a user by its \_id

- DELETE to remove user by its \_id

_/api/users/:userId/friends/:friendId_

- POST to add a new friend to a user's friend list

- DELETE to remove a friend from a user's friend list

_/api/thoughts_

- GET to get all thoughts

- GET to get a single thought by its \_id

- POST to create a new thought (don't forget to push the created thought's \_id to the associated user's thoughts array field)

- PUT to update a thought by its \_id

- DELETE to remove a thought by its \_id

_/api/thoughts/:thoughtId/reactions_

- POST to create a reaction stored in a single thought's reactions array field

- DELETE to pull and remove a reaction by the reaction's reactionId value

## License

MIT License Copyright (c) 2023 Lorne Cyr

## Badges

![Boot Camp Project](https://img.shields.io/badge/Boot%20Camp%20Project-%E2%9C%94%EF%B8%8F-green)
