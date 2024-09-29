const pg = require("../src/configs/psql.config")

async function dropTable () {
    await pg.schema.dropTable("users")

    console.log( await "Tables Dropped Successfully ... " );
}

dropTable()