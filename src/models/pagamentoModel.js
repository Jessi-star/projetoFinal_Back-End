const connection = require ('./connection');

async function getAllPagamentoModel() {
    const pagamentos = await connection.query(
        'SELECT * FROM pagamento'
    )

    return pagamentos.rows;
}

async function getPagamentoByIdModel(id){
    const pagamento = await connection.query(
        `SELECT * FROM pagamento WHERE id = ${id}`
    )

    return pagamento.rows[0];
}

async function insertPagamentoModel(
        modelo,
        preco,
        status
){
    await connection.query(`
    INSERT INTO pagamento (modelo,
        preco,
        status
    ) VALUES (
        '${modelo}',
        '${preco}',
        '${status}'
      )
    `)

    return;

}

async function getPagamentoByNameModel(preco){
    const pagamento = await connection.query(
    `SELECT * FROM pagamento WHERE nome LIKE '${preco}'`
    )

    return pagamento.rows[0];
}

async function updatePagamentoModel(id, preco){
    await connection.query(`
    UPDATE pagamento SET preco = ${preco} WHERE id = ${id}
    `)
    return;
}


async function deletePagamentoModel(id){
    await connection.query(`
    DELETE FROM pagamento WHERE id= ${id}`)

    return;
}    

  
module.exports = {
    getAllPagamentoModel,
    getPagamentoByIdModel,
    insertPagamentoModel,
    getPagamentoByNameModel,
    updatePagamentoModel,
    deletePagamentoModel,

}