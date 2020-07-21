# Setup
Please follow these steps if you want to run this application

## Install MongoDB

install the latest version of MongoDB Community Edition first.

https://docs.mongodb.com/manual/installation/

Once you install MongoDB, make sure it's running.

## Install the Dependencies

```bash
npm i
```

## Generate Database

```bash
node seed.js
```

## Run the Tests

```bash
npm test
```

All tests should pass.

## Start the Server

```bash
node index.js
```
or
```bash
nodemon index.js
```

This will launch the Node server on port 3000

Open up your browser and head over to:

[http://localhost:3000/package](http://localhost:3000/package)


