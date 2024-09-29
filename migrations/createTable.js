const pg = require("../src/configs/psql.config")

async function createTable () {
    await pg.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("nickName").notNullable();
        table.string("image").notNullable();
    })

    console.log( await "Table Created Successfully ... " );
}

createTable()