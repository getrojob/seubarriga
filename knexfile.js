module.exports = {
    test: {
        client: 'pg',
        version: '9.6',
        connection: {
            host: 'localhost',
            user:'postgres',
            password:'1324',
            database: 'barriga',
        },
        migrations:{
            directory:'src/migrations',
        },
    },
};
