const connection = require('./connection');

async function getAllClientModel() {
    const clientes = await connection.query(
        'SELECT * FROM clientes'
    )

    return clientes.rows;
}

async function getClientByIdModel(id){
    const clientes = await connection.query(
        `SELECT * FROM clientes WHERE id = ${id}`
    )

    return clientes.rows[0];
}

async function insertClientModel(
    id,
    nome,
    cpf,
    telefone, 
    email,
    endereço
){
    await connection.query(`
        INSERT INTO clientes ( id, nome, cpf, telefone, email, endereço) VALUES (
            '${id}',
            ${nome},
            ${cpf},
            '${telefone}',
            ${email},
            '${endereço}'
            
        )
     `)

    return;
    
}

async function getClientByNameModel(nome){
    const clientes = await connection.query(
        `SELECT * FROM clientes WHERE nome LIKE '${nome}'`
    )

    return clientes.rows[0];
}

async function updateClientModel(id, nome){
    await connection.query(`
        UPDATE clientes SET nome = ${nome} WHERE id = ${id}
    `)

    return;
}

async function deleteClientModel(id){
    await connection.query(`
        DELETE FROM clientes WHERE id = ${id}
    `)

    return;
}

module.exports = {
    getAllClientModel,
    getClientByIdModel,
    insertClientModel,
    getClientByNameModel,
    updateClientModel,
    deleteClientModel
};
