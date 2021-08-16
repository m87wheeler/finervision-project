## Getting Started

To get the app up and running as quickly as possible, first run `npm i` or `yarn` in the following directories to install the required modules:

1. `root`
2. `./client`
3. `./server`

Once installed, `cd` back into the `root` of the project and run the following command:

```
npm run dev
or
yarn dev
```

This command will launch the client-side ReactJS application and the ExpressJS server simultaneously using `concurrently`. If you would prefer to run both servers independently, run the following commands in separate terminals from the root directory:

```
npm run client
or
yarn client
```
```
npm run server 
or
yarn server
```
Both servers can also be launched from their respective directories using `yarn start`.

<br />

## Database
The database for this project uses SQLite to persist data storage and the `sqlite3` ORM / node module to map between the server and database.

If you do not currently have a way to access the database on your machine, I suggest using `sqlite browser`, a desktop application for opening, viewing, and editing sqlite databases.

You can download it here:
```
https://sqlitebrowser.org/blog/version-3-12-2-released/
```

<br />

## What Next?
Future additions to the project would look like:
1. Authentication for the SQLite database
2. Detailed error highlighting on inputs / selects / etc.
3. Responsive design