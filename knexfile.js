module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/<examples>',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/products_articles',
    migrations: {
      directory: __dirname + '/models/migrations'
    },
    seeds: {
      directory: __dirname + 'models/seeds/'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/models/migrations'
    },
    seeds: {
      directory: __dirname + 'models/seeds'
    },
    useNullAsDefault: true
  }
}