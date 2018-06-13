# Footballers Server

Backend for the [Footballers Frontend](https://github.com/cherlin/footballers-frontend).

## How to use
1. Clone the repo. ```git clone https://github.com/cherlin/footballers-server```
2. Change into the directory. ```cd footballers-server```
3. Run ```yarn install``` or ```npm install``` 
4. Run ```yarn start``` or ```npm start``` to start the server.

By default the server listens to port 1337 on localhost. This can be changed with environmental variables PORT and HOSTNAME respectively.

The server can be started with Nodemon to restart on file changes by running ```yarn dev``` or ```npm run dev``` instead of "start" as described in step 4 above.

## Available API methods and endpoints.
* GET /api/players - returns an array of player objects in JSON format.
