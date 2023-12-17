const { conn } = require("../config/conn");

const getAll = async () => {
  /*Cláusula try catch porque puede fallar y si daerror y no lo manejo se me rompe la app no sigue consultando */
  try {
    const [rows] = await conn.query(
      "SELECT product.*,licence.licence_name,category.category_name FROM (product LEFT JOIN licence ON product.licence_id = licence.licence_id) LEFT JOIN category ON product.category_id = category.category_id;"
    ); /*Traemos el nombre de la licencia con id concidentes en foreing key */
    /*console.log(rows)*/
    return rows;
  } catch (e) {
    const error = {
      isError: true,
      message: `No se pudo obtener la información solicitada debido a  ${e}`,
    };
    return error;
  } finally {
    await conn.releaseConnection();
  }
};
const getOne = async (params) => {
  try {
    const [rows] = await conn.query(
      "SELECT product.*,licence.licence_name, licence.licence_description FROM product LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;",
      params
    ); /*Me trae toda la info del producto y le agrega el nombre de la licencia coincidente con el licence _id que tiene product .Filtramos por el param que determinemos en el controlador*/
    return rows;
  } catch (e) {
    const error = {
      isError: true,
      message: `No se pudo obtener la información solicitada debido a  ${e}`,
    };
    return error;
  } finally {
    await conn.releaseConnection();
  }
};
const getItemsSameLicence = async (params) => {
  try {
    const [rows] = await conn.query("SELECT * FROM product WHERE ?;", params);
    return rows;
  } catch (e) {
    const error = {
      isError: true,
      message: `No se pudo obtener la información solicitada debido a  ${e}`,
    };
    return error;
  } finally {
    await conn.releaseConnection();
  }
};

const createOneItem = async (params) => {
  try {
    const [product] = await conn.query("INSERT INTO product (product_name,product_description,price,stock,discount,sku,dues,image_front,image_back,licence_id,category_id) VALUES ?;", [params]);
    return product;
  } catch (e) {
    const error = {
      isError: true,
      message: `No se pudo obtener la información solicitada debido a  ${e}`,
    };
    return error;
  } finally {
    await conn.releaseConnection();
  }
};

module.exports = {
  getAll,
  getOne,
  getItemsSameLicence,
  createOneItem
};
