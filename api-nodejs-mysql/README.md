# Description
This is a REST API for fokontany, kaomina, distrika, faritra and faritany in Madagasikara made with Node.js and MySQL.

# Installation
1. Download [madagasikara.sql](../files/) and import it on your MySQL/MariaDB server.
2. Go on [prisma](prisma/) folder and copy/paste `.env.example` file into `.env`.
3. Edit the `.env` file with a valid credentials in order to connect to the database.
4. Run the following commands :

```
npm i
npx prisma db pull
npx prisma generate
npm start
```
5. Go to http://localhost:8800

# Endpoints and methods

## GET
- `/v1/{fokontany or kaomina or distrika or faritra or faritany}` : List of fokontany or kaomina or distrika or faritra or faritany.
- `/v1/{fokontany or kaomina or distrika or faritra or faritany}/:id` : Fokontany or kaomina or distrika or faritra or faritany with specified id.
- `/v1/{fokontany or kaomina or distrika or faritra or faritany}/name/:name` : List of fokontany or kaomina or distrika or faritra or faritany with specified name.

## POST
- `/v1/{fokontany or kaomina or distrika or faritra or faritany}/add` : Add fokontany or kaomina or distrika or faritra or faritany.

## PUT
- `/v1/{fokontany or kaomina or distrika or faritra or faritany}/edit/:id` : Edit fokontany or kaomina or distrika or faritra or faritany with specified id.

## DELETE
- `/v1/{fokontany or kaomina or distrika or faritra or faritany}/delete/:id` : Delete fokontany or kaomina or distrika or faritra or faritany with specified id.

# Good to know
- There is no authentication or permission system on this API.
- Logs are visible on `prod.log` and `uncaughtExceptions.log` files.

# Contributing
Follow [this guide](../CONTRIBUTING.md).