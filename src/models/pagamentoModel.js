const connection = require ('./connection');

async function getAllPagamentosModel() {
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
        marca,
        modelo,
        ano,
        preço,
        imagem,
        status
){
    await connection.query(`
    INSERT INTO pagamentos (marca,
        modelo,
        ano,
        preço,
        imagem,
        status
    ) VALUES (
      '${marca}',  
        '${modelo}',
        '${ano}',
        '${preço}',
        '${imagem}',
        '${status}'
      )
    `)

    return;

}

async function getPagamentoByNameModel(preço){
    const pagamento = await connection.query(
    `SELECT * FROM pagamentos WHERE nome LIKE '${preço}'`
    )

    return pagamento.rows[0];
}

async function updatePagamentoModel(id, preço){
    await connection.query(`
    UPDATE pagamentos SET episodios = ${preço} WHERE id = ${id}
    `)
    return;
}


async function deletePagamentosModel(id){
    await connection.query(`
    DELETE FROM pagamentos WHERE id= ${id}`)

    return;
}    

  
module.exports = {
    getAllPagamentosModel,
    getPagamentoByIdModel,
    insertPagamentoModel,
    getPagamentoByNameModel,
    updatePagamentoModel,
    deletePagamentosModel,

}