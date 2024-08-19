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
    veiculo_id,
    forma_pagamento,
    status_pagamento
){
    await connection.query(`
    INSERT INTO pagamento (veiculo_id,
        forma_pagamento,
        status_pagamento
    ) VALUES (
        '${veiculo_id}',
        '${forma_pagamento}',
        '${status_pagamento}'
      )
    `)

    return;

}

async function getPagamentoByNameModel(forma_pagamento){
    const pagamento = await connection.query(
    `SELECT * FROM pagamento WHERE nome LIKE '${forma_pagamento}'`
    )

    return pagamento.rows[0];
}

async function updatePagamentoModel(id, forma_pagamento){
    await connection.query(`
    UPDATE pagamento SET preco = ${forma_pagamento} WHERE id = ${id}
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