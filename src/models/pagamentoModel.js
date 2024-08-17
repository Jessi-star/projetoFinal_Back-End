const connection = require ('./connection');

async function getAllPagamentoModel() {
    const pagamentos = await connection.query(
        'SELECT * FROM pagamentos'
    )

    return pagamentos.rows;
}

async function getPagamentoByIdModel(id){
    const pagamento = await connection.query(
        `SELECT * FROM pagamentos WHERE id = ${id}`
    )

    return pagamento.rows[0];
}

async function insertPagamentoModel(
        modelo,
        preco,
        status
){
    await connection.query(`
    INSERT INTO pagamentos (modelo,
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
    `SELECT * FROM pagamentos WHERE nome LIKE '${preco}'`
    )

    return pagamento.rows[0];
}

async function updatePagamentoModel(id, preco){
    await connection.query(`
    UPDATE pagamentos SET preco = ${preco} WHERE id = ${id}
    `)
    return;
}


async function deletePagamentoModel(id){
    await connection.query(`
    DELETE FROM pagamentos WHERE id= ${id}`)

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