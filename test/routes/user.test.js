const request = require('supertest');

const app = require('../../src/app');

const mail = `${Date.now()}@mail.com`;

test('Deve listar todos os usuários', () => {
    return request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
        });
});

test('Deve inserir usuário com sucesso', () => {

    return request(app).post('/users')
        .send({ name: 'Walter Mitty', mail, passwd: '123456' })
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Walter Mitty');
        });
});

test('Não deve inserir usuário sem nome', () => {
    return request(app).post('/users')
        .send({ mail: 'getulio@teste.com', passwd: '123456' })
        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Nome é um atributo obrigatório');
        });
});

test('Não deve inserir usuário sem email', async () => {
    const result = await request(app).post('/users')
        .send({ name: "Jessica Passos", passwd: '123456' });
    expect(result.status).toBe(400);
    expect(result.body.error).toBe('Email é um atributo obrigatório');
});

test('Não deve inserir usuários sem senha', (done) => {
    request(app).post('/users')
        .send({ name: "Gustavo Rodrigues", mail: 'guga@teste.com' })
        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Senha é um atributo obrigatório');
            done();
        }).catch(err => done.fail(err));
});

test('Não deve inserir usuário com email existente', () => {
    return request(app).post('/users')
        .send({ name: 'Walter Mitty', mail, passwd: '123456' })
        .then((res) => {
            expect(res.status).toBe(400);
            expect(res.body.error).toBe('Já existe um usuário com esse email');
        });
});
