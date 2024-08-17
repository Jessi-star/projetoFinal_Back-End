const connection = require('./connection');

async function insertUsersModel(nome, email, senha, perfil){
    await connection.query(`
        insert INTO users (nome, email, senha, perfil) VALUES (
            '${nome}',
            '${email}',
            '${senha}',
            '${perfil}'
        )`)

    return;
}

async function getUserByIdModel(id){
    const user = await connection.query(`
        SELECT 
            id,
            name,
            email,
            perfil
        FROM users WHERE id = ${id}
    `)

    return user.rows(0);
}

async function deleteUserModel(id){
    await connection.query(`
        DELETE FROM users WHERE id = ${id}
    `)
}

module.exports = {
    insertUsersModel,
    getUserByIdModel,
    deleteUserModel
}