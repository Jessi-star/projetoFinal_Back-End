const connection = require('./connection');

async function getAllCaractereClientesModel() {
    const caracteClientes = await connection.query(
        'SELECT * FROM caracteriticas_veiculos'
    )

    return caracteClientes.rows;
}

async function getCaractereClientesByIdModel(id){
    const caracteClientes = await connection.query(
        `SELECT * FROM caracteriticas_veiculos WHERE id = ${id}`
    )

    return caracteClientes.rows[0];
}

async function insertCaractereClientesModel(
    veiculo_id,
    cor,
    combustivel,
    quilometragem,
){
    await connection.query(`
        INSERT INTO caracteriticas_veiculos (veiculo_ID, cor, combustivel, quilometragem) VALUES (
            ${veiculo_id},
            '${cor}',
            '${combustivel}',
            '${quilometragem}',
        )
     `)

    return;
    
}

async function getCaractereClientesByNameModel(veiculo_ID){
    const caracteClientes = await connection.query(
        `SELECT * FROM caracteriticas_veiculos WHERE veiculo_ID LIKE '${veiculo_ID}'`
    )

    return caracteClientes.rows[0];
}

async function updateCaractereClientesModel(id, cor, combustivel, quilometragem){
    await connection.query(`
        UPDATE caracteriticas_veiculos SET cor = ${cor} WHERE id = ${id}
        UPDATE caracteriticas_veiculos SET combustivel = ${combustivel} WHERE id = ${id}
        UPDATE caracteriticas_veiculos SET quilometragem = ${quilometragem} WHERE id = ${id}
    `)

    return;
}

async function deleteCaractereClientesModel(id){
    await connection.query(`
        DELETE FROM caracteriticas_veiculos WHERE id = ${id}
    `)

    return;
}

module.exports = {
    getAllCaractereClientesModel,
    getCaractereClientesByIdModel,
    insertCaractereClientesModel,
    getCaractereClientesByNameModel,
    updateCaractereClientesModel,
    deleteCaractereClientesModel
};