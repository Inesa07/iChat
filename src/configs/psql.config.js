const knex = require("knex")

const pg = knex({
    client : "pg",
    connection : {
        user : process.env.PSQL_USER,
        host : process.env.PSQL_HOST,
        database : process.env.PSQL_DATABASE,
        port : process.env.PSQL_PORT ,
        password : process.env.PSQL_PASSWORD
    }
})

module.exports = pg