const connection = require('./connection');

async function  getAllVendasModel() {
    const vendas = await connection.query(
        'SELECT * FROM Vendas'
    )

    return animes.rows;
}

async function getVendasByIdModel(id){
    const anime = await connection.query(
        `SELECT * FROM vendas WHERE id = ${id}`
    )

    return anime.rows[0];
}

async function insertVendasModel(
        id,
        id_veiculo,
        id_cliente,
        data_venda,
        valor_venda
){
    await connection.query(`
         INSERT INTO animes (
            id,
            id_veiculo,
            id_cliente,
            data_venda,
            valor_venda
        ) VALUES (
            '${id}',
            '${id_veiculo}',
            '${id_cliente}',
            '${data_venda}',
            '${valor_venda}',
         )
    `)

    return;

}

async function updateVendasModel(id, episodios){
    await connection.query(`
        UPDATE animes SET episodios = ${episodios} WHERE id = ${id}
    `)

    return;
}


async function getVendasByNameModel(nome){
    const anime = await connection.query(
        `SELECT * FROM vendas WHERE nome LIKE '${nome}'`
    )

    return anime.rows[0];
}

async function deleteVendasModel(id,){
    await connection.query(`
        DELETE vendas WHERE id = ${id}
    `)

    return;
}

module.exports = {
    getAllVendasModel,
    getVendasByIdModel,
    insertVendasModel,
    updateVendasModel,
    getVendasByNameModel,
    deleteVendasModel
}