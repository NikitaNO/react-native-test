# react-native-test

The test task consists of 2 parts:
  - the client implmentation
  - the server implementation
  
### The server
All the server files are included in `src/api` folder.
  
To configure database setup, please change `db.js` file in `src/api/config`.
Also, to be able to run the server, your database should have `clients` table with these columns:
  - id (SERIAL PRIMARY KEY)
  - email (VARCHAR(255) not null)
  - password (VARCHAR(255) not null)
  - name (VARCHAR(255) not null)
  - telephone (VARCHAR(15) not null)

By default, config looks something like this: 
```javascript
{ 
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: '12345',
  port: 5432,
}
```

To start the server, just run: `node .` in `src/api`


### The client

To perform requests to the server, you should change the IP in `src/mobile/config/index.js` to the one where your server is running( if you run your server locally, it is you computer's IP ). To find out your IP, run `ifconfig` in the terminal.

Mind you, after changing the IP, the file should look like this:
```javascript
export default {
  apiUrl: 'http://(your IP):(port)/auth'
};
```
Port is defined in `src/api/config/index.js`

To be able to run the client side, you should do the following:
  
##### For android:
  - make sure the server is running
  - run `npm i` in root folder
  - run `react-native run-android` in root folder
    
##### For ios:
  - make sure the server is running
  - run `npm i` in root folder
  - open XCode project from `ios` folder, choose device and click `Run`
