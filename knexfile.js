module.exports = {
    client: "sqlite3", //specify the database management system
    useNullAsDefault: true, //required for SQLite
    connection: {
        filename: "./data/produce.db3" //location of the database file
    }
}

