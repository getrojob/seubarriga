const app = require("../app");

module.exports = (app) => {
    const findAll = () => {
        return app.bd('users').select();
    };

    const save = (user) => {
        if (!user.name) return {
            error: 'Nome é um atributo obrigatorio'
        };
        return app.db('users').insert(user, '*');
    };
    return { findAll, save };
};

