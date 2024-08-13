const connection = require("./connection")

async function getAllCarrosModel() {
    const carros = await connection.query(
        'SELECT * FROM veiculos'
    )

    return carros.rows;
}

async function getCarroByIdModel(id) {
    const carros = await connection.query(
        `SELECT * FROM veiculos WHERE id = ${id}`
    )

    return carros.rows[0];
}

async function insertCarroModel(
    marca,
    modelo,
    ano,
    preço,
    imagem,
    status,
) {
    await connection.query(`
    INSERT INTO veiculos ( marca, modelo, ano, preço, imagem,  status) VALUES (
        '${marca}',
            ${modelo},
            ${ano},
            '${preço}',
            '${imagem}',
            ${status},
    )
    `)

    return;
}

async function getCarroByNameModel(marca){
    const carro = await connection.query(
        `SELECT * FROM veiculos WHERE marca LIKE '${marca}'`
    )

    return carro.rows[0];
}

async function updateCarroModel(id, preço){
    await connection.query(`
        UPDATE veiculos SET preço = ${preço} WHERE id = ${id}
    `)

    return;
}

async function deleteCarrosModel(id){
    await connection.query(`
        DELETE FROM veiculos WHERE id = ${id}
    `)

    return;
}

module.exports = {
    getAllCarrosModel,
    getCarroByIdModel,
    insertCarroModel,
    getCarroByNameModel,
    updateCarroModel,
    deleteCarrosModel,
}
