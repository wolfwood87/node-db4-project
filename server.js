module.exports = {
    development: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './data/recipes.db3',
    },
    migrations: {
        directory: './data/migrations'
    },
    seeds: {
        directory: './data/seeds'
    },
};