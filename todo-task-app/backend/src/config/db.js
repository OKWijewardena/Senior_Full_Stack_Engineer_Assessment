const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },  // Required for cloud DBs like Supabase
});

module.exports = pool;
