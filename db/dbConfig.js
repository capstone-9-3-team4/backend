const pgp = require("pg-promise")();
require("dotenv").config();

const connectionString = process.env.ELEPHANTSQL_URL;

const db = pgp({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false  // Used for ElephantSQL as it requires SSL
    }
});

module.exports = db;